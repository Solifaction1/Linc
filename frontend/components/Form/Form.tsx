/* eslint-disable max-lines */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import CustomFormData, {
	FormField,
	FormSubmission,
} from '@models/customForm.model'

import { handleFormFields } from '@components/Form/FormFieldHandler'
import Button from '@components/Button/Button'
import { addFormApi, postMailData } from '@services/api.service'
import styles from './form.module.scss'

const Form: React.FC<CustomFormData> = (props: CustomFormData) => {
	const [loading, setLoading] = useState(false)
	const [leftFormFields, setLeftFormFields] = useState(
		props.form_template.data?.attributes.leftSection ?? []
	)
	const [rightFormFields, setRightFormFields] = useState(
		props.form_template.data?.attributes.rightSection ?? []
	)

	const router = useRouter()

	const getMailData = (
		dataPayload: FormSubmission,
		internalMailAddress: string | null | undefined
	) => {
		const mailData: any = dataPayload.data.map((item) => ({
			[item.place_holder ? item.place_holder : item.type]: item.value,
		}))

		if (internalMailAddress !== '') {
			mailData.push({
				email: props.form_template.data?.attributes.internalMailAddress,
				mailId: props.form_template.data?.attributes.internalMailId,
			})
		} else {
			const mail = dataPayload.data.find((item) => item.label === 'Email')
			if (mail) {
				mailData.push({
					email: mail.value,
					mailId: props.form_template.data?.attributes.mailId,
				})
			}
		}

		mailData.push({
			formId: props.form_template.data?.attributes.FormId,
		})

		console.log(mailData)
		return mailData
	}

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			setLoading(true)
			const dataPayload: FormSubmission = {
				title: props.form_template.data?.attributes.title,
				FormId: props.form_template.data?.attributes.FormId?.toString(),
				data: [...leftFormFields, ...rightFormFields],
			}
			console.log(dataPayload)
			const request = await addFormApi(dataPayload)

			if (request && request.status === 200) {
				const mailData = getMailData(dataPayload, '')

				const internalMailData = getMailData(
					dataPayload,
					props.form_template.data?.attributes.internalMailAddress
				)

				const mailRequest = await postMailData(mailData)
				const internalMailRequest = await postMailData(internalMailData)

				if (
					mailRequest &&
					mailRequest.status === 200 &&
					internalMailRequest &&
					internalMailRequest.status === 200
				) {
					router.push(
						props.form_template.data?.attributes.thankYouSlug || 'thank-you'
					)
				}
			}

			setLoading(false)
		} catch (error) {
			alert('Form is not submitted , Server Error') // TODO handle errors
			setLoading(false)
			console.log(error)
		}
	}

	const onChange = (e: React.RefObject<HTMLInputElement>, value: any) => {
		let foundField = false
		setLeftFormFields(
			leftFormFields.map((field) => {
				if (`${field.__component}-${field.id}` === e.current?.id) {
					field.value = value
					foundField = true
				}
				return field
			})
		)
		if (!foundField) {
			setRightFormFields(
				rightFormFields.map((field) => {
					if (`${field.__component}-${field.id}` === e.current?.id) {
						field.value = value
						foundField = true
					}
					return field
				})
			)
		}
	}
	const {
		register,
		formState: { errors },
	} = useForm()

	useEffect(() => {
		setLoading(false)
		setLeftFormFields(props.form_template.data?.attributes.leftSection ?? [])
		setRightFormFields(props.form_template.data?.attributes.rightSection ?? [])
	}, [
		props.form_template.data?.attributes.leftSection,
		props.form_template.data?.attributes.rightSection,
		props.locale,
	])

	return (
		<div className={`${styles.container}`}>
			<p className={`${styles.form} ${styles.formIntro}`}>
				{props.form_template.data?.attributes.form_intro}
			</p>
			<form onSubmit={onSubmit} className={styles.form}>
				<div>
					{props.form_template.data?.attributes.title_location === 'left' && (
						<h5>{props.form_template.data.attributes.title}</h5>
					)}
					{leftFormFields &&
						leftFormFields.map((field: FormField) =>
							handleFormFields(field, onChange, register, errors)
						)}
				</div>
				<div>
					{props.form_template.data?.attributes.title_location === 'right' && (
						<h5>{props.form_template.data.attributes.title}</h5>
					)}
					{rightFormFields &&
						rightFormFields.map((field: FormField) =>
							handleFormFields(field, onChange, register, errors)
						)}
				</div>

				<Button
					className={`${styles.submitButton}`}
					buttonType="submit"
					isLoading={loading}
					handleClick={onSubmit}
					label={props.form_template.data?.attributes.submit_button_text}
				/>
			</form>
		</div>
	)
}

export default Form

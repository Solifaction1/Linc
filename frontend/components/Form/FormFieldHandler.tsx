import React from 'react'
import Select from '@components/Select/Select'
import Input from '@components/Input/Input'
import { FormField } from '@models/customForm.model'
import TextArea from '@components/TextArea/TextArea'

export const handleFormFields = (
	field: FormField,
	onChange: any,
	register: any,
	error: any
) => {
	const options = field?.options?.split('\n') ?? ['']

	switch (field.type) {
		case 'select':
			return (
				<Select
					label={field.label}
					key={`${field.__component}-${field.id}`}
					options={options}
					id={`${field.__component}-${field.id}`}
					onChange={onChange}
					register={register}
					required={field.required}
				/>
			)
		case 'textarea':
			return (
				<TextArea
					id={`${field.__component}-${field.id}`}
					key={`${field.__component}-${field.id}`}
					label={field.label}
					onChange={onChange}
				/>
			)
			break
		default:
			return (
				<Input
					id={`${field.__component}-${field.id}`}
					key={`${field.__component}-${field.id}`}
					value={field.value}
					type={field.type}
					required={field.required}
					placeholder={field.label}
					onChange={onChange}
					register={register}
				/>
			)
	}
}

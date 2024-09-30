import { Component } from './component.model'

interface Field {
	id: number
	place_holder: string
	required: boolean
	__component: string
	label?: string
}
export interface InputField extends Field {
	type?: string
	value?: any
}
interface SelectField extends Field {
	options?: string
}
export interface FormField extends InputField, SelectField {}
type attributeInputField = {
	FormId?: number
	title?: string
	title_location?: 'left' | 'right'
	form_intro?: string
	submit_button_text?: string
	leftSection: InputField[]
	rightSection: InputField[]
	internalMailId: string | null,
	thankYouSlug: string | null,
	internalMailAddress: string | null
	mailId: string | null
}

export type FormSubmission = {
	title?: string
	FormId?: string
	data: any[]
}

export default interface CustomFormData extends Component {
	form_template: {
		data: {
			id: number
			attributes: attributeInputField
		} | null
	},
	locale: string
}

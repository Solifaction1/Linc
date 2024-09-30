import React from 'react'

type propsConfig = {
	type?:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| string
	id: string
	size?: 'sm' | 'md' | 'lg' | string
	placeholder?: string
	disabled?: boolean
	required?: boolean
	errorMessage?: string
	className?: string
	value: any
	register: any
	onChange?: (
		e: React.RefObject<HTMLInputElement>,
		value: any,
		isDirty: boolean
	) => void
}

const defaultProps = {
	type: 'text',
	id: 'textField',
	label: 'label',
	size: 'md',
	value: '',
	placeholder: 'temporary',
	disabled: false,
	errorMessage: '',
	required: false,
	className: '',
}

export type { propsConfig }
export { defaultProps }

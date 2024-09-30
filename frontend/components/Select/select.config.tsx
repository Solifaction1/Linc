import React from 'react'

type propsConfig = {
	id: string
	options: string[]
	size?: 'sm' | 'md' | 'lg' | string
	placeholder?: string
	disabled?: boolean
	required?: boolean
	errorMessage?: string
	className?: string
	value?: any
	label?: string
	register: any
	onChange?: (e: React.RefObject<HTMLInputElement>, value: any) => void
}

const defaultProps = {
	type: 'text',
	label: '',
	size: 'md',
	value: '',
	disabled: false,
	errorMessage: '',
	required: false,
	className: '',
}

export type { propsConfig }
export { defaultProps }

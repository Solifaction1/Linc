import React from 'react'

type propsConfig = {
	buttonType?: 'primary' | 'secondary' | 'tertiary' | string
	size?: 'sm' | 'md' | 'lg' | string
	disabled?: boolean
	isLoading?: boolean
	className?: string
	handleClick?: React.MouseEventHandler<HTMLButtonElement>
	children?: React.ReactNode
	label?: string
	icon?: string
	color?: string
}

const defaultProps = {
	buttonType: 'primary',
	size: 'md',
	disabled: false,
	isLoading: false,
	className: '',
	children: undefined,
	label: '',
	icon: '',
	color: 'beige',
}
export type { propsConfig }
export { defaultProps }

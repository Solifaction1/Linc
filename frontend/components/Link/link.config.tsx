import React from 'react'

type propsConfig = {
	href: string
	linkType?: 'navigation' | 'external' | string
	size?: 'sm' | 'md' | 'lg' | string
	disabled?: boolean
	className?: string
	handleClick?: React.MouseEventHandler<HTMLButtonElement>
	children?: React.ReactNode
	label?: string
	blank?: boolean
	icon?: string
}

const defaultProps = {
	href: '/test',
	linkType: 'external',
	disabled: false,
	size: 'md',
	className: '',
	children: undefined,
	label: '',
	blank: false,
}

export type { propsConfig }
export { defaultProps }

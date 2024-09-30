type YGWYSData = {
	text: string
	className?: string | undefined
	inline?: boolean | undefined
}

const defaultProps: YGWYSData = {
	text: '<p>Do you get what you see?</p>',
	className: 'description',
	inline: false,
}

export type { YGWYSData }
export { defaultProps }

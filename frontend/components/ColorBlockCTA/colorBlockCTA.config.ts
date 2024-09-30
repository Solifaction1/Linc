import ColorBlockData from '@models/colorBlockCTA.model'

const defaultProps: ColorBlockData = {
	ctas: [
		{
			description: {
				text: '<p>description bottom left</p>',
				className: 'string',
			},

			cta: {
				id: 0,
				title: 'Afspraak maken',
				link: 'https://google.be/left',
				externalLink: false,
				buttonType: 'Button primary',
			},
		},
		{
			description: {
				text: '<p>description bottom right</p>',
				className: 'string',
			},

			cta: {
				id: 0,
				title: 'Contact',
				link: 'https://google.be/right',
				externalLink: false,
				buttonType: 'Button primary',
			},
		},
	],
}

export { defaultProps }

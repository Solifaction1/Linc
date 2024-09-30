import { HeaderData } from '@models/attributes.model'

const defaultProps: HeaderData = {
	color: 'gray',
	imagePosition: 'right',
	image: {
		data: {
			id: 0,
			attributes: {
				name: 'name',
				alternativeText: 'alternativeText',
				width: 876,
				height: 1025,
				hash: 'hash',
				ext: 'ext',
				mime: 'mime',
				size: 0,
				url: 'https://via.placeholder.com/876x1025',
			},
		},
	},
	text: {
		text: '<p>description</p>',
		className: 'string',
	},
	CTA: null,
	bottomText: {
		description: {
			text: '<p>description bottom</p>',
			className: 'string',
		},

		cta: {
			id: 0,
			title: 'Onze aanpak',
			link: 'https://google.be',
			externalLink: false,
			buttonType: 'Button primary',
		},
	},
}

export { defaultProps }

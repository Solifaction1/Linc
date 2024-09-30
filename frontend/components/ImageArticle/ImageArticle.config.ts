import ImageArticleData from '@models/imageArticle.model'

const defaultProps: ImageArticleData = {
	color: 'blueGray',
	imagePosition: 'right',
	image: {
		data: {
			id: 0,
			attributes: {
				name: 'name',
				alternativeText: 'alternativeText',
				width: 0,
				height: 0,
				hash: 'hash',
				ext: 'ext',
				mime: 'mime',
				size: 0,
				url: 'https://via.placeholder.com/400x500',
			},
		},
	},
	title: 'Find out what our customers have to say.',
	description: {
		text: '<p>description imageACTA</p>',
		className: 'string',
	},
	cta: {
		id: 0,
		title: 'cta title',
		link: '/link',
		externalLink: false,
		buttonType: 'Button primary',
	},
}

export { defaultProps }

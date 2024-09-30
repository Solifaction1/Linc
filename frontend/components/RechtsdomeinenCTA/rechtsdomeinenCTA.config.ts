import RechtsdomeinenCTAData from '@models/rechtsdomeinenCTA.model'

const defaultProps: RechtsdomeinenCTAData = {
	title: 'title',
	description: 'description',
	cta: {
		id: 0,
		title: 'cta title',
		link: '/link',
		externalLink: false,
		buttonType: 'Button primary',
	},
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
	collectionType: {
		data: [
			{
				id: 1,
				attributes: {
					title: 'Rechtsdomein 1',
					slug: 'slug-1',
					image: {
						data: null
					},
					component: [],
					locale: 'locale',
					seo: null,
					createdAt: '',
					updatedAt: '',
					publishedAt: '',
					body: [],
					color: 'gray'
				}
			},
			{
				id: 2,
				attributes: {
					title: 'Rechtsdomein 2',
					slug: 'slug-2',
					image: {
						data: null
					},
					component: [],
					locale: 'locale',
					seo: null,
					createdAt: '',
					updatedAt: '',
					publishedAt: '',
					body: [],
					color: 'gray'
				}	
			}
		]
	}
}

export { defaultProps }

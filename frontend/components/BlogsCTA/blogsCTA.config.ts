import BlogsCTAData from '@models/blogsCTA.model'

const defaultProps: BlogsCTAData = {
	title: 'title',
	description: 'description',
	cta: {
		id: 0,
		title: 'cta title',
		link: '/link',
		externalLink: false,
		buttonType: 'Button primary',
    },
    collectionType: {
		data: [
			{
				id: 1,
				attributes: {
					title: 'Blog 1',
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
					title: 'Blog 2',
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

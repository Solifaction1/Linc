import KantorenData from '@models/kantoren.model'

const defaultProps: KantorenData = {
	title: 'kantoren 1',
	description: {
		text: '<p>description</p>',
		className: 'string',
	},
	kantoorCollection: {
		data: [
			{
				id: 1,
				attributes: {
					title: 'Kantoor 1',
					phone: '034792341',
					adress: 'teststraat 2000 Antwerpen',
					email: 'test@email.be',
					slug: 'slug-1',
					image: {
						data: null,
					},
					component: [],
					locale: 'locale',
					seo: null,
					createdAt: '',
					updatedAt: '',
					publishedAt: '',
					body: [],
				},
			},
			{
				id: 2,
				attributes: {
					title: 'Kantoor 2 met een iets langere titel',
					phone: '037293456',
					adress: 'blastraat 2000 Antwerpen',
					email: 'bla@email.be',
					slug: 'slug-2',
					image: {
						data: null,
					},
					component: [],
					locale: 'locale',
					seo: null,
					createdAt: '',
					updatedAt: '',
					publishedAt: '',
					body: [],
				},
			},
		],
	},
	ctaLabel: 'ctaLabel'
}

export { defaultProps }

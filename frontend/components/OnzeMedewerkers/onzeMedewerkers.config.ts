/* eslint-disable max-lines */
import OnzeMedewerkersData from "@models/onzeMedewerkers.model"

const defaultProps: OnzeMedewerkersData = {
	id: 2,
	title: 'title',
	description: 'description',
	employees: {
		data: [
			{
				id: 0,
				attributes: {
					name: 'name',
					locale: 'locale',
					firstName: 'firstName',
					role: 'role',
					rechtsdomeinen: {
						data: [{
							id: 1,
							attributes: {
								title: 'title',
								description: {
									text: '<p>test</p>'
								},
								image: {
									data: null
								},
								slug: 'slug',
								updatedAt: 'new Date()',
								publishedAt: 'new Date()',
								createdAt: 'new Date()',
								component: [],
								locale: 'locale',
								seo: null,
								body: []
							}
						}]
					},
					telephone: 'telephone',
					slug: 'slug',
					updatedAt: 'new Date()',
					publishedAt: 'new Date()',
					createdAt: 'new Date()',
					color: 'color',
					header: {
						color: 'color',
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
							}
						},
						imagePosition: 'left',
						CTA: null,
						bottomText: { cta: null }
					},
					linkedin: 'https://linkedin.com',
					showInNavigation: true
				}
			}
		]
	}
}

export { defaultProps }

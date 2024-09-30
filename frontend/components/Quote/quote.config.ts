/* eslint-disable max-lines */
import QuoteData from "@models/quote.model"

const defaultProps: QuoteData = {
	id: 2,
	title: 'title',
	employee: {
		data: {
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
					color: 'gray',
					imagePosition: 'imagePosition',
					image: { data: null },
					CTA: null,
					bottomText: { cta: null }
				},
				linkedin: null,
				showInNavigation: true
			}
		}
	}
}

const defaultPropsNoRole: QuoteData = {
	id: 2,
	title: 'title',
	employee: {
		data: {
			id: 0,
			attributes: {
				name: 'name',
				locale: 'locale',
				firstName: 'firstName',
				role: null,
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
					color: 'gray',
					imagePosition: 'imagePosition',
					image: { data: null },
					CTA: null,
					bottomText: { cta: null }
				},
				linkedin: null,
				showInNavigation: true
			}
		}
	}
}

const defaultPropsNoRoleAndNoRechtsDomein: QuoteData = {
	id: 2,
	title: 'title',
	employee: {
		data: {
			id: 0,
			attributes: {
				name: 'name',
				locale: 'locale',
				firstName: 'firstName',
				role: null,
				rechtsdomeinen: {
					data: []
				},
				telephone: 'telephone',
				slug: 'slug',
				updatedAt: 'new Date()',
				publishedAt: 'new Date()',
				createdAt: 'new Date()',
				color: 'color',
				header: {
					color: 'gray',
					imagePosition: 'imagePosition',
					image: { data: null },
					CTA: null,
					bottomText: { cta: null }
				},
				linkedin: null,
				showInNavigation: true
			}
		}
	}
}

const defaultPropsNoRechtsDomein: QuoteData = {
	id: 2,
	title: 'title',
	employee: {
		data: {
			id: 0,
			attributes: {
				name: 'name',
				locale: 'locale',
				firstName: 'firstName',
				role: 'role',
				rechtsdomeinen: {
					data: []
				},
				telephone: 'telephone',
				slug: 'slug',
				updatedAt: 'new Date()',
				publishedAt: 'new Date()',
				createdAt: 'new Date()',
				color: 'color',
				header: {
					color: 'gray',
					imagePosition: 'imagePosition',
					image: { data: null },
					CTA: null,
					bottomText: { cta: null }
				},
				linkedin: null,
				showInNavigation: true
			}
		}
	}
}

export { defaultProps, defaultPropsNoRole, defaultPropsNoRoleAndNoRechtsDomein, defaultPropsNoRechtsDomein }

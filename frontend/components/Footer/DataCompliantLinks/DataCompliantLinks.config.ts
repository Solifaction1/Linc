import { Navigation } from "@models/navigation.model"

const defaultProps: Navigation = {
    audience: [],
	collapsed: false,
	createdAt: 'createdAt',
	id: 0,
	items: null,
	menuAttached: false,
	order: 0,
	parent: null,
	path: 'path',
	related: {
        createdAt: 'createdAt',
        facebook: 'facebook',
        instagram: 'instagram',
        linkedin: 'linkedin',
        locale: 'en',
        id: 1,
        navigationItemId: 1,
        publishedAt: 'publishedAt',
        sitemap_exclude: false,
        updatedAt: 'updatedAt',
        updatedBy: 'updatedBy',
        __contentType: '',
	},
    sitemap_exclude: false,
    title: 'title',
    type: 'type',
    uiRouterKey: 'uiRouterKey',
    updatedAt: 'updatedAt'
}

export { defaultProps }
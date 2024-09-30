import { NavigationHeaderData } from './attributes.model'
import { DataAttributes } from './component.model'

export interface Navigation {
	audience: []
	children?: Navigation[]
	collapsed: boolean
	createdAt: string
	externalPath?: string | null
	id: number
	items: string | null
	menuAttached: boolean
	order: number
	parent: Parent | null
	path: string | null
	related: RelatedContactInformation | null,
	sitemap_exclude: boolean
	title: string
	type: string
	uiRouterKey: string
	updatedAt: string
}

export interface Parent {
	additionalFields: []
	collapsed: boolean
	createdAt: string
	externalPath: string | null
	id: number
	menuAttached: boolean
	order: number
	path: string
	sitemap_exclude: boolean
	title: string
	type: string
	uiRouterKey: string
	updatedAt: string
}

export interface Thumbnail {
	ctaLabel: string
	description: string | null
	icon: string | null
	id: number
	title: string
	image?: DataAttributes
}

export interface RelatedContactInformation {
	createdAt: string
	createdBy?: string
	facebook: string
	instagram: string
	linkedin: string
	locale: string,
	id: number
	navigationItemId: number
	publishedAt: string
	sitemap_exclude: boolean
	updatedAt: string
	updatedBy: string
	header?: NavigationHeaderData
	__contentType: string
}

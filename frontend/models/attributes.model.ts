/* eslint-disable import/no-cycle */
/* eslint-disable max-lines */
import { YGWYSData } from '@components/YGWYS/YGWYS.config'
import { Component, Media, DataAttributes } from './component.model'
import RechtsdomeinenSideBarData from "./rechtsdomeinenSidebar.model"
import CTAData from './cta.model'
import RechtsdomeinData from './rechtsDomein.model'

export interface Page {
	data: PageData[]
	meta?: Meta
}

export interface PageData {
	id: number
	attributes: Attributes
}

export interface HeaderData {
	color: 'gray' | 'beige' | 'blue-gray' | 'dark-green' | 'light-green' | string
	imagePosition: 'left' | 'right' | string
	image: Media
	text?: YGWYSData
	CTA: CTAData | null
	bottomText: ygwysCTA
}

export interface EmployeeHeaderData extends HeaderData {
	firstName: string
	name: string
	rechtsdomeinen: {
		data: Array<RechtsdomeinData>
	}
	telephone: string | null
}

export interface ygwysCTA {
	description?: YGWYSData
	cta: CTAData | null
}

export interface Contacts {
	id: number
	label?: string
	url: string
}

export interface DefaultAttributes {
	title?: string
	slug?: string
	createdAt: string
	updatedAt: string
	publishedAt: string
}

export interface Attributes extends DefaultAttributes {
	phone?: string
	adress?: string
	email?: string
	slug: string
	image?: Media
	component: Component[]
	locale: string
	seo: SEO | null
	header?: HeaderData
	localizations?: Localizations
	body: Component[]
	shortDescription?: string
	color?: 'gray' | 'beige' | 'blue-gray' | 'dark-green' | 'light-green' | string
	description?: YGWYSData,
	rechtsdomeinenSidebar?: RechtsdomeinenSideBarData | null
}

export interface EmployeePageAttributes extends Attributes {
	firstName?: string
	name?: string
	rechtsdomeinen?: {
		data: Array<RechtsdomeinData>
	}
	telephone: string | null
}

export interface NavigationHeaderData {
	title?: string
	subtitle?: string
	highlight?: boolean
	text?: string
	image: DataAttributes
	CTA: CTAData[]
	contactInfo?: Contacts[]
}

export interface LocalizationsData {
	id: number
	attributes: Attributes
}

export interface Localizations {
	data?: LocalizationsData[]
}

export interface SEO {
	id: number
	metaTitle: string
	metaDescription: string
	keywords: string
	metaRobots: string
	structuredData: StructuredData
	metaViewport: string
	canonicalURL: string
	metaImage: Media
	metaSocial: MetaSocial[]
}

export interface MetaSocial {
	id: number
	socialNetwork: string
	title: string
	description: string
	image: Media
}

export interface StructuredData {
	'@context': string
	'@type': string
	name: string
	author: Author
	datePublished: Date
	description: string
	prepTime: string
}

export interface Author {
	'@type': string
	name: string
}

export interface Meta {
	pagination: Pagination
}

export interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

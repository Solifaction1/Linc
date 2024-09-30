export interface Component {
	id?: number
	__component?: string
}

export interface Media {
	data: MediaData | null
}

export interface Medias {
	data: MediaData[] | null
}

export interface MediaData {
	id: number
	attributes: DataAttributes
}

export interface DataAttributes {
	name: string
	alternativeText?: string
	caption?: string
	width: number
	height: number
	formats?: Formats | undefined
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl?: string
	provider?: string
	provider_metadata?: string
	createdAt?: string
	updatedAt?: string
}

export interface Formats {
	thumbnail: Thumbnail
	small: Size
	medium: Size
	large: Size
}

export interface Thumbnail {
	name: string
	hash: string
	ext: string
	mime: string
	path?: string
	width: number
	height: number
	size: number
	url: string
}

export interface Size {
	name: string
	hash: string
	ext: string
	mime: string
	path?: string
	width: number
	height: number
	size: number
	url: string
}

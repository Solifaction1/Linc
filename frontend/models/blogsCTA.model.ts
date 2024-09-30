import { Page } from './attributes.model'
import { Component } from './component.model'
import CTAData from './cta.model'

export default interface BlogsCTAData extends Component {
    title: string | null
	description: string | null
	cta: CTAData | null
	collectionType?: Page
}

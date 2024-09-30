import { Page } from './attributes.model'
import { Component, Media } from './component.model'
import CTAData from './cta.model'

export default interface RechtsdomeinenCTAData extends Component {
    title: string | null
	description: string | null
	cta: CTAData | null
	image: Media | null
	collectionType?: Page
}

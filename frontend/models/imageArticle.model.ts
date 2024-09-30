import { YGWYSData } from '@components/YGWYS/YGWYS.config'
import { Component, Media } from './component.model'
import CTAData from './cta.model'

export default interface ImageArticleData extends Component {
	image: Media
	title?: string
	description?: YGWYSData | null
	cta?: CTAData
	color: 'beige' | 'blue-gray' | 'dark-green' | 'light-green' | string
	imagePosition: 'left' | 'right' | string
}

import { YGWYSData } from '@components/YGWYS/YGWYS.config'
import { Page } from './attributes.model'
import { Component } from './component.model'

export default interface KantorenData extends Component {
	title: string | null
	description: YGWYSData | null
	kantoorCollection?: Page
	ctaLabel: string | null
}

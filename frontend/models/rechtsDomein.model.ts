/* eslint-disable import/no-cycle */
import { YGWYSData } from '@components/YGWYS/YGWYS.config'
import { Media } from './component.model'
import { Attributes } from './attributes.model'

export default interface RechtsdomeinData {
	id: number
	attributes: RechtsdomeinAttributes
}

interface RechtsdomeinAttributes extends Attributes {
	title: string
	description: YGWYSData
	image: Media
}

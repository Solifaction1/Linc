import { Component } from './component.model'
import CTAData from './cta.model'

export default interface ArticleCTAData extends Component {
    title: string,
    description: string,
    cta?: CTAData
}
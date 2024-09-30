import { YGWYSData } from "@components/YGWYS/YGWYS.config";
import CTAData from "@models/cta.model";
import { Component } from './component.model'

export default interface DoubleHeaderParagraphData extends Component {
    leftParagraph: YGWYSData
    rightParagraph: YGWYSData
    leftCta: CTAData | null
    rightCta: CTAData | null
}
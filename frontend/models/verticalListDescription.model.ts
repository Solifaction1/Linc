import { YGWYSData } from '@components/YGWYS/YGWYS.config'
import CTAData from "./cta.model";

export default interface VerticalListDescriptionData {
    id: number,
    title: string | null,
    description: YGWYSData | null,
    cta: CTAData | null
}
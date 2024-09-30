import { YGWYSData } from '@components/YGWYS/YGWYS.config'
import { Component, Media } from './component.model'
import RechtsdomeinenSideBarData from './rechtsdomeinenSidebar.model'

export default interface RechtsdomeinenAccordionItemData extends Component {
    description: YGWYSData | undefined,
    image: Media | undefined,
    rechtsdomeinenSideBarData?: RechtsdomeinenSideBarData | null
}
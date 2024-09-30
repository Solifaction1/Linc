import { Component } from './component.model'
import VerticalListItemData from './verticalListItem.model'
import VerticalListDescriptionData from './verticalListDescription.model'

export default interface VerticalListData extends Component {
    location: 'left' | 'right' | string
    description: VerticalListDescriptionData,
    titles: VerticalListItemData[]
}
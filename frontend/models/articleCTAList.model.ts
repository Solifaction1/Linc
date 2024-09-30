import ArticleCTAData from './articleCTA.model'
import { Component } from './component.model'

export default interface ArticleCTAListData extends Component {
    articles: ArticleCTAData[],
    dark: boolean
}
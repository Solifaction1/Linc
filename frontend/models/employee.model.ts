/* eslint-disable import/no-cycle */
import { DefaultAttributes, HeaderData } from './attributes.model'
import RechtsdomeinData from './rechtsDomein.model'

export default interface EmployeeData {
	id: number
	attributes: EmployeeAttributes
}

interface EmployeeAttributes extends DefaultAttributes {
	name: string
	firstName: string
	role: string | null
	color: string | null
	telephone: string | null
	rechtsdomeinen: { data: Array<RechtsdomeinData> }
	header: HeaderData
	locale: string
	linkedin: string | null
	showInNavigation: boolean
}

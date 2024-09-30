import EmployeeData from '@models/employee.model'
import { Component } from './component.model'

export default interface QuoteData extends Component {
	title: string
	employee: {
		data: EmployeeData
	}
}

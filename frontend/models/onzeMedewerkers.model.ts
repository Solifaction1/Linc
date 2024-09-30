import EmployeeData from '@models/employee.model'
import { Component } from './component.model'

export default interface OnzeMedewerkersData extends Component {
    title: string | null
    description: string | null
	employees: {
		data: Array<EmployeeData>
	}
}

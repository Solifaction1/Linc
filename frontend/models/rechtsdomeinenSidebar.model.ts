/* eslint-disable import/no-cycle */
import { Component } from './component.model'
import CTAData from './cta.model'
import EmployeeData from './employee.model'

export default interface RechtsdomeinenSideBarData extends Component {
    title: string | null,
    description: string | null,
    employees: {
        data: EmployeeData[]
    },
    firstCta: CTAData,
    secondCta: CTAData
}
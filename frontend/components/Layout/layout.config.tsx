import React from 'react'
import EmployeeData from '@models/employee.model'
import { Navigation } from '@models/navigation.model'

import PageData, { EmployeePageData } from '@models/page.model'

type LayoutProps = {
	navigation?: {
		resultNavigation: Navigation[]
		resultFooter: Navigation[]
		resultEmployees: { data: EmployeeData[] }
	}
	children: React.ReactNode
	data?: PageData
}

type EmployeeLayoutProps = {
	navigation?: {
		resultNavigation: Navigation[]
		resultFooter: Navigation[]
		resultEmployees: { data: EmployeeData[] }
	}
	children: React.ReactNode
	data?: EmployeePageData
}

export type { LayoutProps, EmployeeLayoutProps }

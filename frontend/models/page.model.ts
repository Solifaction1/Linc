import { Attributes, EmployeePageAttributes } from './attributes.model'
import EmployeeData from './employee.model'
import { Navigation } from './navigation.model'

interface PageData {
	id: number
	attributes: Attributes
}

interface EmployeePageData {
	id: number
	attributes: EmployeePageAttributes
}

type singlePageConfig = {
	navigation: {
		resultFooter: Navigation[]
		resultNavigation: Navigation[]
		resultEmployees: { data: EmployeeData[] }
	}
	page: {
		data: PageData
	}
	rechtsdomeinen: {
		data: Array<PageData>
	}
	kantoren: {
		data: Array<PageData>
	}
	preview: boolean | null,
	locale: string
}

type pageConfig = {
	navigation: {
		resultFooter: Navigation[]
		resultNavigation: Navigation[]
		resultEmployees: { data: EmployeeData[] }
	}
	page: {
		data: Array<PageData>
	}
	employeePage: {
		data: Array<EmployeePageData>
	}
	rechtsdomeinen: {
		data: Array<PageData>
	}
	kantoren: {
		data: Array<PageData>
	}
	preview: boolean | null,
	locale: string
}

type contentConfig = {
	params: { slug: string }
	preview: boolean | null
	locale: string
	defaultLocale: string
}

export type { singlePageConfig, pageConfig, contentConfig, EmployeePageData }

export default PageData

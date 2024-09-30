/* eslint-disable max-lines */
import EmployeeData from '@models/employee.model'
import { Navigation as NavigationModel } from '@models/navigation.model'

const parent: NavigationModel = {
	audience: [],
	collapsed: false,
	createdAt: 'createdAt',
	id: 0,
	items: null,
	menuAttached: false,
	order: 0,
	parent: null,
	path: 'path',
	related: {
        createdAt: 'createdAt',
        facebook: 'facebook',
        instagram: 'instagram',
        linkedin: 'linkedin',
        locale: 'en',
        id: 1,
        navigationItemId: 1,
        publishedAt: 'publishedAt',
        sitemap_exclude: false,
        updatedAt: 'updatedAt',
        updatedBy: 'updatedBy',
        __contentType: '',
	},
    sitemap_exclude: false,
    title: 'title',
    type: 'type',
    uiRouterKey: 'uiRouterKey',
    updatedAt: 'updatedAt'
}

const employeeA: EmployeeData = {
	id: 0,
	attributes: {
		name: 'aName',
		firstName: 'aFirstName',
		role: null,
		color: null,
		telephone:  null,
		rechtsdomeinen: { data: [] },
		header: {
			color: 'gray',
			imagePosition: 'left',
			image: {data: null},
			CTA: null,
			bottomText: {
				cta: null
			},
		},
		locale: 'en',
		linkedin: null,
		showInNavigation: true,
		createdAt: '',
		publishedAt: '',
		updatedAt: ''
	},
}

const employeeB: EmployeeData = {
	id: 0,
	attributes: {
		name: 'bName',
		firstName: 'bFirstName',
		role: null,
		color: null,
		telephone:  null,
		rechtsdomeinen: { data: [] },
		header: {
			color: 'gray',
			imagePosition: 'left',
			image: {data: null},
			CTA: null,
			bottomText: {
				cta: null
			},
		},
		locale: 'en',
		linkedin: null,
		showInNavigation: true,
		createdAt: '',
		publishedAt: '',
		updatedAt: ''
	},
}

const employeeC: EmployeeData = {
	id: 0,
	attributes: {
		name: 'cName',
		firstName: 'cFirstName',
		role: null,
		color: null,
		telephone:  null,
		rechtsdomeinen: { data: [] },
		header: {
			color: 'gray',
			imagePosition: 'left',
			image: {data: null},
			CTA: null,
			bottomText: {
				cta: null
			},
		},
		locale: 'en',
		linkedin: null,
		showInNavigation: true,
		createdAt: '',
		publishedAt: '',
		updatedAt: ''
	},
}

const employeeD: EmployeeData = {
	id: 0,
	attributes: {
		name: 'dName',
		firstName: 'dFirstName',
		role: null,
		color: null,
		telephone:  null,
		rechtsdomeinen: { data: [] },
		header: {
			color: 'gray',
			imagePosition: 'left',
			image: {data: null},
			CTA: null,
			bottomText: {
				cta: null
			},
		},
		locale: 'en',
		linkedin: null,
		showInNavigation: true,
		createdAt: '',
		publishedAt: '',
		updatedAt: ''
	},
}

const employeeE: EmployeeData = {
	id: 0,
	attributes: {
		name: 'eName',
		firstName: 'eFirstName',
		role: null,
		color: null,
		telephone:  null,
		rechtsdomeinen: { data: [] },
		header: {
			color: 'gray',
			imagePosition: 'left',
			image: {data: null},
			CTA: null,
			bottomText: {
				cta: null
			},
		},
		locale: 'en',
		linkedin: null,
		showInNavigation: true,
		createdAt: '',
		publishedAt: '',
		updatedAt: ''
	},
}

const employeeF: EmployeeData = {
	id: 0,
	attributes: {
		name: 'fName',
		firstName: 'fFirstName',
		role: null,
		color: null,
		telephone:  null,
		rechtsdomeinen: { data: [] },
		header: {
			color: 'gray',
			imagePosition: 'left',
			image: {data: null},
			CTA: null,
			bottomText: {
				cta: null
			},
		},
		locale: 'en',
		linkedin: null,
		showInNavigation: true,
		createdAt: '',
		publishedAt: '',
		updatedAt: ''
	},
}

const employeeG: EmployeeData = {
	id: 0,
	attributes: {
		name: 'gName',
		firstName: 'gFirstName',
		role: null,
		color: null,
		telephone:  null,
		rechtsdomeinen: { data: [] },
		header: {
			color: 'gray',
			imagePosition: 'left',
			image: {data: null},
			CTA: null,
			bottomText: {
				cta: null
			},
		},
		locale: 'en',
		linkedin: null,
		showInNavigation: true,
		createdAt: '',
		publishedAt: '',
		updatedAt: ''
	},
}

const oneEmployee: EmployeeData[] = [employeeA]
const twoEmployees: EmployeeData[] = [employeeA, employeeB]
const threeEmployees: EmployeeData[] = [employeeA, employeeB, employeeC]
const fourEmployees: EmployeeData[] = [employeeA, employeeB, employeeC, employeeD]
const fiveEmployees: EmployeeData[] = [employeeA, employeeB, employeeC, employeeD, employeeE]
const sixEmployees: EmployeeData[] = [employeeA, employeeB, employeeC, employeeD, employeeE, employeeF]
const sevenEmployees: EmployeeData[] = [employeeA, employeeB, employeeC, employeeD, employeeE, employeeF, employeeG]

export {
	parent,
	oneEmployee,
	twoEmployees,
	threeEmployees,
	fourEmployees,
	fiveEmployees,
	sixEmployees,
	sevenEmployees
}

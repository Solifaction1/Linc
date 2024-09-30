/* eslint-disable max-lines */
import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmployeeSwitch from './EmployeeSwitch'
import {
	fiveEmployees,
	fourEmployees,
	oneEmployee,
	parent,
	sevenEmployees,
	sixEmployees,
	threeEmployees,
	twoEmployees,
} from './EmployeeSwitch.config'
import testDuplicates from './testHelpers/testDuplicates'

import testListWithOneEmployee from './testHelpers/testListWithOneEmployee'
import testFirstListWithThreeEmployees from './testHelpers/testFirstListWithThreeEmployees'
import testListWithTwoEmployees from './testHelpers/testListWithTwoEmployees'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('EmployeeSwitch', () => {
	it('renders a EmployeeSwitch with one employee', () => {
		const { container, getByText } = render(
			<EmployeeSwitch
				parent={parent}
				employeeData={{ data: oneEmployee }}
				className="className"
			/>
		)

		expect(container).toMatchSnapshot()

		testDuplicates(container, getByText)

		testListWithOneEmployee(container, getByText, 0, 0, 'aFirstName aName')

		expect(container.getElementsByClassName('urlList')[1]).toBeVisible()
		expect(
			container.getElementsByClassName('urlListWrapper')[1]
		).toBeUndefined()

		expect(container.getElementsByClassName('urlList')[2]).toBeVisible()
		expect(
			container.getElementsByClassName('urlListWrapper')[2]
		).toBeUndefined()
	})

	it('renders a EmployeeSwitch with two employees', () => {
		const { container, getByText } = render(
			<EmployeeSwitch
				parent={parent}
				employeeData={{ data: twoEmployees }}
				className="className"
			/>
		)

		expect(container).toMatchSnapshot()

		testDuplicates(container, getByText)

		testListWithOneEmployee(container, getByText, 0, 0, 'aFirstName aName')
		testListWithOneEmployee(container, getByText, 1, 1, 'bFirstName bName')

		expect(container.getElementsByClassName('urlList')[2]).toBeVisible()
		expect(
			container.getElementsByClassName('urlListWrapper')[2]
		).toBeUndefined()
	})

	it('renders a EmployeeSwitch with three employees', () => {
		const { container, getByText } = render(
			<EmployeeSwitch
				parent={parent}
				employeeData={{ data: threeEmployees }}
				className="className"
			/>
		)

		expect(container).toMatchSnapshot()

		testDuplicates(container, getByText)

		testListWithOneEmployee(container, getByText, 0, 0, 'aFirstName aName')
		testListWithOneEmployee(container, getByText, 1, 1, 'bFirstName bName')
		testListWithOneEmployee(container, getByText, 2, 2, 'cFirstName cName')
	})

	it('renders a EmployeeSwitch with four employees', () => {
		const { container, getByText } = render(
			<EmployeeSwitch
				parent={parent}
				employeeData={{ data: fourEmployees }}
				className="className"
			/>
		)

		expect(container).toMatchSnapshot()

		testDuplicates(container, getByText)

		testListWithTwoEmployees(
			container,
			getByText,
			0,
			0,
			'aFirstName aName',
			1,
			'bFirstName bName'
		)
		testListWithOneEmployee(container, getByText, 1, 2, 'cFirstName cName')
		testListWithOneEmployee(container, getByText, 2, 3, 'dFirstName dName')
	})

	it('renders a EmployeeSwitch with five employees', () => {
		const { container, getByText } = render(
			<EmployeeSwitch
				parent={parent}
				employeeData={{ data: fiveEmployees }}
				className="className"
			/>
		)

		expect(container).toMatchSnapshot()

		testDuplicates(container, getByText)

		testListWithTwoEmployees(
			container,
			getByText,
			0,
			0,
			'aFirstName aName',
			1,
			'bFirstName bName'
		)
		testListWithTwoEmployees(
			container,
			getByText,
			1,
			2,
			'cFirstName cName',
			3,
			'dFirstName dName'
		)
		testListWithOneEmployee(container, getByText, 2, 4, 'eFirstName eName')
	})

	it('renders a EmployeeSwitch with six employees', () => {
		const { container, getByText } = render(
			<EmployeeSwitch
				parent={parent}
				employeeData={{ data: sixEmployees }}
				className="className"
			/>
		)

		expect(container).toMatchSnapshot()

		testDuplicates(container, getByText)

		testListWithTwoEmployees(
			container,
			getByText,
			0,
			0,
			'aFirstName aName',
			1,
			'bFirstName bName'
		)
		testListWithTwoEmployees(
			container,
			getByText,
			1,
			2,
			'cFirstName cName',
			3,
			'dFirstName dName'
		)
		testListWithTwoEmployees(
			container,
			getByText,
			2,
			4,
			'eFirstName eName',
			5,
			'fFirstName fName'
		)
	})

	it('renders a EmployeeSwitch with seven employees', () => {
		const { container, getByText } = render(
			<EmployeeSwitch
				parent={parent}
				employeeData={{ data: sevenEmployees }}
				className="className"
			/>
		)

		expect(container).toMatchSnapshot()

		testDuplicates(container, getByText)

		testFirstListWithThreeEmployees(container, getByText)
		testListWithTwoEmployees(
			container,
			getByText,
			1,
			3,
			'dFirstName dName',
			4,
			'eFirstName eName'
		)
		testListWithTwoEmployees(
			container,
			getByText,
			2,
			5,
			'fFirstName fName',
			6,
			'gFirstName gName'
		)
	})
})

import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import OnzeMedewerkers from './OnzeMedewerkers'
import { defaultProps } from './onzeMedewerkers.config'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('OnzeMedewerkers', () => {
	it('renders OnzeMedewerkers', () => {
		const { container, getByText } = render(
			<OnzeMedewerkers {...defaultProps} />
		)

		expect(container).toMatchSnapshot()

		expect(container.querySelector('section')).toBeVisible()
		expect(container.getElementsByClassName('onzeMedewerkers')[0]).toBeVisible()

		expect(getByText('title', { selector: 'h2' })).toBeVisible()
		expect(getByText('description', { selector: 'p' })).toBeVisible()

		expect(container.getElementsByClassName('employees')[0]).toBeVisible()
		expect(container.getElementsByClassName('employeeWrapper')[0]).toBeVisible()
		expect(container.getElementsByClassName('employee')[0]).toBeVisible()
		expect(container.querySelector('img')).toBeVisible()

		expect(container.getElementsByClassName('text')[0]).toBeVisible()

		expect(container.getElementsByClassName('name')[0]).toBeVisible()
		expect(getByText('firstName name', { selector: 'h6' })).toBeVisible()

		expect(container.querySelector('a[href="tel:telephone"]')).toBeVisible()
		expect(getByText('Tel: telephone', { selector: 'h6' })).toBeVisible()

		expect(
			container.querySelector('a[href="https://linkedin.com"]')
		).toBeVisible()
		expect(container.querySelector('svg')).toBeVisible()
		expect(container.querySelector('path')).toBeVisible()

		expect(container.getElementsByClassName('rechtsdomein')[0]).toBeVisible()
		expect(getByText('title', { selector: 'p' })).toBeVisible()
	})
})

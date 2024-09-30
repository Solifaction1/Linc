import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Quote from './Quote'
import {
	defaultProps,
	defaultPropsNoRoleAndNoRechtsDomein,
	defaultPropsNoRole,
	defaultPropsNoRechtsDomein,
} from './quote.config'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('Quote', () => {
	it('renders a Quote', () => {
		const { container, getByText } = render(<Quote {...defaultProps} />)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('quote')[0]).toBeVisible()

		expect(container.getElementsByClassName('title')[0]).toBeVisible()
		expect(getByText('title', { selector: 'div' })).toBeVisible()

		expect(container.getElementsByClassName('author')[0]).toBeVisible()
		expect(
			getByText('firstName name - role - title', { selector: 'p' })
		).toBeVisible()
	})

	it('renders a Quote with no role', () => {
		const { container, getByText } = render(<Quote {...defaultPropsNoRole} />)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('quote')[0]).toBeVisible()

		expect(container.getElementsByClassName('title')[0]).toBeVisible()
		expect(getByText('title', { selector: 'div' })).toBeVisible()

		expect(container.getElementsByClassName('author')[0]).toBeVisible()
		expect(getByText('firstName name - title', { selector: 'p' })).toBeVisible()
	})

	it('renders a Quote with no rechtsdomein and no role', () => {
		const { container, getByText } = render(
			<Quote {...defaultPropsNoRoleAndNoRechtsDomein} />
		)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('quote')[0]).toBeVisible()

		expect(container.getElementsByClassName('title')[0]).toBeVisible()
		expect(getByText('title', { selector: 'div' })).toBeVisible()

		expect(container.getElementsByClassName('author')[0]).toBeVisible()
		expect(getByText('firstName name', { selector: 'p' })).toBeVisible()
	})

	it('renders a Quote with no rechtsdomein', () => {
		const { container, getByText } = render(
			<Quote {...defaultPropsNoRechtsDomein} />
		)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('quote')[0]).toBeVisible()

		expect(container.getElementsByClassName('title')[0]).toBeVisible()
		expect(getByText('title', { selector: 'div' })).toBeVisible()

		expect(container.getElementsByClassName('author')[0]).toBeVisible()
		expect(getByText('firstName name - role', { selector: 'p' })).toBeVisible()
	})
})

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactItems from './ContactItems'
import { navigationMockData } from '../__mocks__/mockMobileNavigation'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			locale: 'locale',
		}
	},
}))

describe('ContactItems', () => {
	it('renders a ContactItems', () => {
		const { container, getByText } = render(
			<ContactItems
				contactItem={navigationMockData[0]}
				socialMediaItem={navigationMockData[0]}
				contactButtonClassName="contactButtonClassName"
				contactIconsClassName="contactIconsClassName"
				color="color"
			/>
		)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('contactItems')[0]).toBeVisible()

		expect(
			container.getElementsByClassName(
				'button false tertiary md false contactButtonClassName color'
			)[0]
		).toBeVisible()

		expect(container.getElementsByClassName('label')[0]).toBeVisible()
		expect(getByText('title', { selector: 'p' })).toBeVisible()

		expect(container.getElementsByClassName('link')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('icon contactIconsClassName')[0]
		).toBeVisible()
		expect(container.querySelectorAll('svg')[0]).toBeVisible()
		expect(container.querySelectorAll('path')[0]).toBeVisible()

		expect(container.getElementsByClassName('link')[1]).toBeVisible()
		expect(
			container.getElementsByClassName('icon contactIconsClassName')[1]
		).toBeVisible()
		expect(container.querySelectorAll('svg')[1]).toBeVisible()
		expect(container.querySelectorAll('path')[1]).toBeVisible()
	})
})

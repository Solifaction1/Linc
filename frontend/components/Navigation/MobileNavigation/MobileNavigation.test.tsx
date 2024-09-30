import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MobileNavigation from './MobileNavigation'
import { navigationMockData } from './__mocks__/mockMobileNavigation'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			locale: 'locale',
		}
	},
}))

describe('MobileNavgation', () => {
	it('renders a MobileNavgation', () => {
		const { container, getByText } = render(
			<MobileNavigation
				internalLinksData={navigationMockData}
				className="className"
				localizations={{ data: undefined }}
				color="dark-green"
				contactButtonClassName="contactButtonClassName"
				contactIconsClassName="contactIconsClassName"
				employeesData={{ data: [] }}
			/>
		)

		expect(container).toMatchSnapshot()

		expect(
			container.getElementsByClassName(
				'navigationWrapper false className darkGreen'
			)[0]
		).toBeVisible()

		expect(container.querySelector('header')).toBeVisible()
		expect(
			container.getElementsByClassName('navigationHeader')[0]
		).toBeVisible()
		expect(container.querySelector('a[href="/"]')).toBeVisible()

		expect(container.querySelector('img')).toBeVisible()
		expect(container.getElementsByClassName('logo')[0]).toBeVisible()

		expect(container.getElementsByClassName('hamburgerIcon')[0]).toBeVisible()

		expect(
			container.getElementsByClassName('navigationContainer className false')[0]
		).toBeVisible()
		expect(
			container.getElementsByClassName('navigationMainLinkWrapper')[0]
		).toBeVisible()

		expect(
			container.getElementsByClassName('navigationMainLink')[0]
		).toBeVisible()
		expect(container.querySelector('a[href="/path"]')).toBeVisible()
		expect(getByText('title', { selector: 'li' })).toBeVisible()

		expect(container.getElementsByClassName('languageSwitch')[0]).toBeVisible()

		expect(getByText('LOCALE', { selector: 'button' })).toBeVisible()
	})
})

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DesktopNavigation from './DesktopNavigation'
import { navigationMockData } from './__mocks__/mockDataDesktopNavigation'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			locale: 'locale',
		}
	},
}))

describe('DesktopNavigation', () => {
	it('renders a DesktopNavigation', () => {
		const { container, getByText } = render(
			<DesktopNavigation
				internalLinksData={navigationMockData}
				className="className"
				localizations={{ data: undefined }}
				color="dark-green"
				contactButtonClassName="contactButtonClassName"
				employeesData={{ data: [] }}
			/>
		)

		expect(container).toMatchSnapshot()

		expect(
			container.getElementsByClassName('navigationWrapper className')[0]
		).toBeVisible()

		expect(container.querySelector('a[href="/"]')).toBeVisible()
		expect(container.querySelector('img')).toBeVisible()

		expect(container.querySelector('ul')).toBeVisible()
		expect(
			container.getElementsByClassName('navigationWrapper')[0]
		).toBeVisible()
		expect(
			container.getElementsByClassName('navigationMainLinkWrapper')[0]
		).toBeVisible()

		expect(
			container.getElementsByClassName('navigationMainLink')[0]
		).toBeVisible()
		expect(container.querySelector('a[href="/path"]')).toBeVisible()

		expect(container.getElementsByClassName('languageSwitch')[0]).toBeVisible()
		expect(getByText('LOCALE', { selector: 'button' })).toBeVisible()
		expect(
			container.getElementsByClassName('languageLink activeLang')[0]
		).toBeVisible()
		expect(container.querySelectorAll('svg')[0]).toBeVisible()
		expect(container.querySelectorAll('path')[0]).toBeVisible()

		expect(
			container.getElementsByClassName('accordionWrapper')[0]
		).toBeVisible()
		expect(
			container.getElementsByClassName('languageLinkWrapper')[0]
		).toBeVisible()
	})
})

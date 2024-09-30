import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DataCompliantLinks from './DataCompliantLinks'
import { mockNavigationData } from '../__mocks__/mockData'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			locale: 'locale',
			pathname: 'test/test',
		}
	},
}))

describe('DataCompliantLinks', () => {
	it('renders the DataCompliantLinks', () => {
		const { container, getByText } = render(
			<DataCompliantLinks
				className="className"
				dataCompliantLinks={mockNavigationData}
				localizations={{ data: undefined }}
			/>
		)

		expect(container).toMatchSnapshot()

		expect(
			container.getElementsByClassName('dataCompliantLinks className')[0]
		).toBeVisible()

		expect(
			container.getElementsByClassName('dataCompliantLinksCollection')[0]
		).toBeVisible()

		expect(container.getElementsByClassName('copyright')[0]).toBeVisible()
		expect(
			getByText('Copyright linc.legal 2023', { selector: 'p' })
		).toBeVisible()

		expect(container.getElementsByClassName('languageSwitch')[0]).toBeVisible()
		expect(container.getElementsByClassName('languageSwitch')[1]).toBeVisible()

		expect(
			container.getElementsByClassName('languageLink activeLang')[0]
		).toBeVisible()
		expect(getByText('LOCALE', { selector: 'button' })).toBeVisible()

		expect(container.getElementsByClassName('links')[0]).toBeVisible()

		expect(
			container.getElementsByClassName('link link link md false')[0]
		).toBeVisible()
		expect(container.querySelector('a[href="/parent1"]')).toBeVisible()

		expect(
			container.getElementsByClassName('link link link md false')[1]
		).toBeVisible()
		expect(container.querySelector('a[href="/parent2"]')).toBeVisible()

		expect(
			container.getElementsByClassName('link link link md false')[2]
		).toBeVisible()
		expect(
			container.querySelector('a[href="/contact-information"]')
		).toBeVisible()
		expect(getByText('Contact Information', { selector: 'p' })).toBeVisible()

		expect(
			container.getElementsByClassName('link link link md false')[3]
		).toBeVisible()
		expect(
			container.querySelector('a[href="/data-compliant-links"]')
		).toBeVisible()
		expect(getByText('Data Compliant Links', { selector: 'p' })).toBeVisible()
	})
})

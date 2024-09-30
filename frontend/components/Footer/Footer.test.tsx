import React from 'react'

import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { fetchCollectionApi } from '@services/api.service'
import Footer from './Footer'
import { mockNavigationData } from './__mocks__/mockData'

jest.mock('@services/api.service', () => ({
	fetchCollectionApi: jest.fn(),
}))
jest.mock('next/router', () => ({
	useRouter() {
		return {
			locale: 'locale',
			pathname: 'test/test',
		}
	},
}))

jest.mock('next-i18next', () => ({
	useTranslation() {
		return {
			t: () => {
				'test'
			},
		}
	},
}))

const mockedFetchCollectionApi = fetchCollectionApi as jest.Mock<unknown>

describe('Footer', () => {
	beforeEach(() => {
		mockedFetchCollectionApi.mockImplementation(() => mockNavigationData)
	})

	it('renders a Footer', async () => {
		const { container, getByText } = render(
			<Footer
				internalLinksData={mockNavigationData}
				localizations={{ data: undefined }}
			/>
		)

		expect(container.querySelector('footer')).toBeVisible()
		expect(container.getElementsByClassName('footerWrapper')[0]).toBeVisible()

		expect(container.querySelector('a[href="/"]')).toBeVisible()
		expect(container.getElementsByClassName('logo')[0]).toBeVisible()

		expect(
			container.getElementsByClassName('iconsRow iconsRow')[0]
		).toBeVisible()

		await waitFor(() => {
			expect(container.getElementsByClassName('internalLinks')[0]).toBeVisible()
			expect(
				container.getElementsByClassName('link link link md false')[0]
			).toBeVisible()
			expect(container.querySelector('a[href="/parent1"]')).toBeVisible()
			expect(getByText('Parent 1', { selector: 'p' })).toBeVisible()

			expect(
				container.getElementsByClassName('link link link md false')[1]
			).toBeVisible()
			expect(container.querySelector('a[href="/parent2"]')).toBeVisible()
			expect(getByText('Parent 2', { selector: 'p' })).toBeVisible()

			expect(
				container.getElementsByClassName('link link link md false')[2]
			).toBeVisible()
			expect(
				container.querySelector('a[href="/contact-information"]')
			).toBeVisible()
			expect(getByText('Contact Information', { selector: 'p' })).toBeVisible()

			expect(
				container.getElementsByClassName('iconsRow undefined')[0]
			).toBeVisible()
			expect(container.getElementsByClassName('text')[0]).toBeVisible()

			expect(
				container.getElementsByClassName('dataCompliantLinksWrapper')[0]
			).toBeVisible()
		})

		expect(container).toMatchSnapshot()
	})
})

import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { navigationMockData } from '@components/Navigation/DesktopNavigation/__mocks__/mockDataDesktopNavigation'
import IconsRow from './IconsRow'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			locale: 'locale',
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

describe('IconsRow', () => {
	it('renders no icons when no props are given IconsRow', () => {
		const { container } = render(
			<IconsRow
				contactItem={navigationMockData[0]}
				facebookLink=""
				linkedInLink="linkedInLink"
			/>
		)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('iconsRow')[0]).toBeVisible()

		expect(container.querySelector('a[href="facebookLink"]')).toBeNull()

		expect(container.querySelector('a[href="linkedInLink"]')).toBeVisible()
		expect(container.querySelectorAll('svg')[0]).toBeVisible()
	})

	it('renders icons when props are given', () => {
		const { container } = render(
			<IconsRow
				contactItem={navigationMockData[0]}
				facebookLink="facebookLink"
				linkedInLink="linkedInLink"
			/>
		)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('iconsRow')[0]).toBeVisible()

		expect(container.querySelector('a[href="facebookLink"]')).toBeVisible()
		expect(container.querySelectorAll('svg')[0]).toBeVisible()

		expect(container.querySelector('a[href="linkedInLink"]')).toBeVisible()
		expect(container.querySelectorAll('svg')[1]).toBeVisible()
	})
})

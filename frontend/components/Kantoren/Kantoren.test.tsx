import React from 'react'

import { findByText, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { defaultProps } from './kantoren.config'
import Kantoren from './Kantoren'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('RechtsdomeinenCTA', () => {
	it('renders a RechtsdomeinenCTA', () => {
		const { container, getByText, getAllByText } = render(
			<Kantoren {...defaultProps} />
		)

		expect(container).toMatchSnapshot()

		expect(container.querySelector('section')).toBeVisible()
		expect(container.getElementsByClassName('kantoor')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('kantoorInformation')[0]
		).toBeVisible()

		expect(container.getElementsByClassName('title')[0]).toBeVisible()
		expect(getByText('kantoren 1', { selector: 'h2' })).toBeVisible()

		expect(container.getElementsByClassName('text')[0]).toBeVisible()
		expect(getByText('description', { selector: 'p' })).toBeVisible()

		expect(
			container.getElementsByClassName('kantorenContainer')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('kantorenWrapper')[0]).toBeVisible()

		expect(container.getElementsByClassName('kantoor')[0]).toBeVisible()
		expect(getByText('Kantoor 1', { selector: 'p' })).toBeVisible()
		expect(getByText('Tel.: 034792341', { selector: 'a' })).toBeVisible()
		expect(
			getByText('teststraat 2000 Antwerpen', { selector: 'p' })
		).toBeVisible()
		expect(getAllByText('ctaLabel', { selector: 'p' })[0]).toBeVisible()

		expect(container.getElementsByClassName('kantoor')[1]).toBeVisible()
		expect(
			getByText('Kantoor 2 met een iets langere titel', { selector: 'p' })
		).toBeVisible()
		expect(getByText('Tel.: 037293456', { selector: 'a' })).toBeVisible()
		expect(
			getByText('blastraat 2000 Antwerpen', { selector: 'p' })
		).toBeVisible()

		expect(getAllByText('ctaLabel', { selector: 'p' })[1]).toBeVisible()
	})
})

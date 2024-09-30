import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { defaultProps } from './rechtsdomeinenCTA.config'
import RechtsdomeinenCTA from './RechtsdomeinenCTA'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('RechtsdomeinenCTA', () => {
	it('renders a RechtsdomeinenCTA', () => {
		const { container, getByText } = render(
			<RechtsdomeinenCTA {...defaultProps} />
		)

		expect(container).toMatchSnapshot()

		expect(container.querySelector('article')).toBeVisible()
		expect(
			container.getElementsByClassName('rechtsdomeinenCTA')[0]
		).toBeVisible()
		expect(
			container.getElementsByClassName('rechtsdomeinenCTAContainer')[0]
		).toBeVisible()

		expect(container.getElementsByClassName('text')[0]).toBeVisible()

		expect(container.getElementsByClassName('title')[0]).toBeVisible()
		expect(getByText('title', { selector: 'h2' })).toBeVisible()

		expect(container.getElementsByClassName('description')[0]).toBeVisible()
		expect(getByText('description', { selector: 'p' })).toBeVisible()

		expect(container.getElementsByClassName('cta')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('button false primary md false')[0]
		).toBeVisible()
		expect(getByText('cta title', { selector: 'p' })).toBeVisible()

		expect(container.getElementsByClassName('image')[0]).toBeVisible()

		const img = container.querySelector('img')
		expect(img).toBeVisible()
		expect(img?.getAttribute('alt')).toEqual('name')
		expect(img?.getAttribute('width')).toEqual('0')
		expect(img?.getAttribute('height')).toEqual('0')
		expect(img?.getAttribute('style')).toEqual('color: transparent;')
		expect(img?.getAttribute('src')).toEqual(
			'/api/custom-loader?url=https%3A%2F%2Fvia.placeholder.com%2F400x500?q=100'
		)

		expect(container.getElementsByClassName('rechtsDomeinen')[0]).toBeVisible()

		expect(container.getElementsByClassName('cta')[1]).toBeVisible()
		expect(
			container.querySelector('a[href="/onze-rechtsdomeinen#1"]')
		).toBeVisible()
		expect(
			container.getElementsByClassName('link link md false')[0]
		).toBeVisible()
		expect(getByText('Rechtsdomein 1', { selector: 'a' })).toBeVisible()
		expect(container.querySelectorAll('svg')[0]).toBeVisible()
		expect(container.querySelectorAll('path')[0]).toBeVisible()

		expect(container.getElementsByClassName('cta')[2]).toBeVisible()
		expect(
			container.querySelector('a[href="/onze-rechtsdomeinen#2"]')
		).toBeVisible()
		expect(
			container.getElementsByClassName('link link md false')[1]
		).toBeVisible()
		expect(getByText('Rechtsdomein 2', { selector: 'a' })).toBeVisible()
		expect(container.querySelectorAll('svg')[1]).toBeVisible()
		expect(container.querySelectorAll('path')[1]).toBeVisible()
	})
})

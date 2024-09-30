import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'
import { defaultProps } from './header.config'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('Header', () => {
	it('renders a Header', () => {
		const { container, getByText } = render(<Header {...defaultProps} />)

		expect(container).toMatchSnapshot()
		const header = container.querySelector('header')
		expect(header).toBeVisible()
		expect(header?.getAttribute('class')).toEqual(
			'header gray right bottomText'
		)

		expect(container.getElementsByClassName('headerContainer')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('headerTextWrapper')[0]
		).toBeVisible()

		expect(container.getElementsByClassName('text')[0]).toBeVisible()
		expect(container.getElementsByClassName('ygwys')[0]).toBeVisible()
		expect(getByText('description', { selector: 'p' })).toBeVisible()

		expect(
			container.getElementsByClassName('headerImageWrapper')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('image')[0]).toBeVisible()
		const img = container.querySelector('img')
		expect(img).toBeVisible()
		expect(img?.getAttribute('alt')).toEqual('alternativeText')
		expect(img?.getAttribute('width')).toEqual('876')
		expect(img?.getAttribute('height')).toEqual('1025')
		expect(img?.getAttribute('src')).toEqual(
			'/api/custom-loader?url=https%3A%2F%2Fvia.placeholder.com%2F876x1025?q=100'
		)

		expect(
			container.getElementsByClassName('headerBottomContainer')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('bottomText')[0]).toBeVisible()

		expect(
			container.getElementsByClassName('bottomTextWrapper')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('text')[1]).toBeVisible()
		expect(container.getElementsByClassName('ygwys')[1]).toBeVisible()
		expect(getByText('description bottom', { selector: 'p' })).toBeVisible()
	})
})

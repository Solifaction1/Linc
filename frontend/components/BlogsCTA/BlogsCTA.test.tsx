import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { defaultProps } from './blogsCTA.config'
import BlogsCTA from './BlogsCTA'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('BlogsCTA', () => {
	it('renders a BlogsCTA', () => {
		const { container, getByText } = render(<BlogsCTA {...defaultProps} />)

		expect(container).toMatchSnapshot()

		expect(container.querySelector('article')).toBeVisible()
		expect(container.getElementsByClassName('blogsCTA')[0]).toBeVisible()

		expect(
			container.getElementsByClassName('blogsCTAContainer')[0]
		).toBeVisible()

		expect(container.getElementsByClassName('title')[0]).toBeVisible()
		expect(getByText('title', { selector: 'h2' })).toBeVisible()

		expect(container.getElementsByClassName('description')[0]).toBeVisible()
		expect(getByText('description', { selector: 'p' })).toBeVisible()

		expect(container.getElementsByClassName('cta')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('button false primary md false')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('label')[0]).toBeVisible()
		expect(getByText('cta title', { selector: 'p' })).toBeVisible()

		expect(container.getElementsByClassName('blogs')[0]).toBeVisible()

		expect(container.getElementsByClassName('cta')[1]).toBeVisible()
		expect(
			container.getElementsByClassName('link link md false')[0]
		).toBeVisible()
		expect(container.querySelectorAll('a[href="/"]')[0]).toBeVisible()
		expect(getByText('Blog 1', { selector: 'a' })).toBeVisible()
		expect(container.querySelectorAll('svg')[0]).toBeVisible()
		expect(container.querySelectorAll('path')[0]).toBeVisible()

		expect(container.getElementsByClassName('cta')[2]).toBeVisible()
		expect(
			container.getElementsByClassName('link link md false')[1]
		).toBeVisible()
		expect(container.querySelectorAll('a[href="/"]')[1]).toBeVisible()
		expect(getByText('Blog 2', { selector: 'a' })).toBeVisible()
		expect(container.querySelectorAll('svg')[1]).toBeVisible()
		expect(container.querySelectorAll('path')[1]).toBeVisible()
	})
})

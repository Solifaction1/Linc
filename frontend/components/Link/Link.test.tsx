import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Link from './Link'

describe('Link', () => {
	it('renders an external Link', () => {
		const { container } = render(
			<Link href="href" disabled size="lg" className="className" label="label">
				children
			</Link>
		)

		expect(container).toMatchSnapshot()

		const link = container.getElementsByClassName(
			'link className external lg disabled'
		)[0]
		expect(link).toBeVisible()
		expect(link?.textContent).toEqual('childrenlabel')
		expect(link.getAttribute('href')).toEqual('href')
		expect(link.getAttribute('rel')).toEqual('noreferrer')
		expect(link.getAttribute('target')).toEqual('_self')
	})

	it('renders a navigation Link', () => {
		const { container } = render(
			<Link
				href="href"
				linkType="navigation"
				className="className"
				blank
				label="Hello"
			>
				{/* TODO: blank lijkt geen svg te renderen  */}
				children
			</Link>
		)

		expect(container).toMatchSnapshot()

		const link = container.getElementsByClassName(
			'link className navigation md false'
		)[0]
		expect(link).toBeVisible()
		expect(link?.textContent).toEqual('childrenHello')
		expect(link.getAttribute('href')).toEqual('href')
	})
})

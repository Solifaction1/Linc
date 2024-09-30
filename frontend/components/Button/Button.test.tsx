import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './Button'

describe('Button', () => {
	it('renders a Button', () => {
		const { container } = render(
			<Button disabled isLoading className="Button" label="label">
				Children
			</Button>
		)

		expect(container).toMatchSnapshot()

		const button = container.querySelector('button')
		expect(button).toBeVisible()
		expect(button?.getAttribute('class')).toContain('button')
		expect(button?.getAttribute('class')).toContain('Button')
		expect(button?.getAttribute('class')).toContain('isLoading')
		expect(button?.getAttribute('class')).toContain('primary')
		expect(button?.getAttribute('class')).toContain('md')

		expect(button?.getAttribute('disabled')).toContain('')
		expect(button?.getAttribute('type')).toContain('button')

		expect(button?.textContent).toEqual('Childrenlabel')
	})
})

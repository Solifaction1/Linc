import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from './PopUp'

describe('PopUp', () => {
	it('renders a PopUp', () => {
		const { container, getByText } = render(<PopUp className="className" />)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('backgroundBlur')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('className popUp open')[0]
		).toBeVisible()

		expect(
			getByText('Hier komt een grote titel', { selector: 'h2' })
		).toBeVisible()

		const button = container.querySelector('button')
		expect(button).toBeVisible()
		expect(button?.getAttribute('class')).toContain('closeButton')
		expect(button?.getAttribute('class')).toContain('actionButton')
		expect(button?.getAttribute('class')).toContain('close')
		expect(button?.getAttribute('class')).toContain('md')
		expect(button?.getAttribute('type')).toEqual('button')
	})
})

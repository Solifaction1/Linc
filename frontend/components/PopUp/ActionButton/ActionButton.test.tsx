import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ActionButton from './ActionButton'

describe('ActionButton', () => {
	it('renders an ActionButton', () => {
		const { container } = render(
			<ActionButton buttonType="close" size="lg" className="ActionButton" />
		)

		expect(container).toMatchSnapshot()

		const button = container.querySelector('button')
		expect(button).toBeVisible()
		expect(button?.getAttribute('class')).toContain('ActionButton')
		expect(button?.getAttribute('class')).toContain('actionButton')
		expect(button?.getAttribute('class')).toContain('close')
		expect(button?.getAttribute('class')).toContain('lg')

		expect(button?.getAttribute('type')).toContain('button')
	})
})

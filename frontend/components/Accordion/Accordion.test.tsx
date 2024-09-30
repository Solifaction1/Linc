import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { defaultProps } from './accordion.config'
import Accordion from './Accordion'

describe('Accordion', () => {
	it('renders an Accordion', () => {
		const { container, getByText } = render(<Accordion {...defaultProps} />)

		expect(container).toMatchSnapshot()

		expect(getByText('Title 1', { selector: 'h4' })).toBeVisible()

		const accordion0 = container.getElementsByClassName('section')[0]
		const buttons = container.getElementsByClassName('accordionButton')

		expect(accordion0).toBeVisible()
		expect(accordion0?.contains(buttons[0]))
		expect(accordion0?.contains(buttons[1]))

		expect(buttons?.length > 0)

		expect(container.querySelector('section[id="componentId"]')).toBeVisible()
	})
})

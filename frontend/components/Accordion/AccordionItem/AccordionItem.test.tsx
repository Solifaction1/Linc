import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AccordionItem from './AccordionItem'
import { defaultProps } from './accordionItem.config'

describe('AccordionItem', () => {
	it('renders an AccordionItem', () => {
		const { container, getByText } = render(<AccordionItem {...defaultProps} />)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('section')[0]).toBeVisible()

		const accordionButton = container.querySelector('button')
		const accordionArrowWrapper =
			container.getElementsByClassName('arrowWrapper')[0]
		const accordionContainer =
			container.getElementsByClassName('accordionContainer')[0]

		expect(accordionButton?.getAttribute('class')).toContain('accordionButton')
		expect(accordionButton?.getAttribute('type')).toContain('button')

		expect(
			accordionButton?.contains(container.getElementsByClassName('title')[0])
		)
		expect(getByText('title', { selector: 'h4' })).toBeVisible()

		expect(accordionButton?.contains(accordionArrowWrapper))
		expect(accordionArrowWrapper?.contains(container.querySelector('svg')))
		expect(accordionArrowWrapper?.contains(container.querySelector('path')))

		expect(
			accordionContainer?.contains(
				container.getElementsByClassName('ygwys undefined undefined')[0]
			)
		)
	})
})

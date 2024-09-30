import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import YGWYS from './YGWYS'
import { defaultProps } from './YGWYS.config'

describe('ygwys', () => {
	it('renders a YGWYS component', () => {
		const { container } = render(<YGWYS {...defaultProps} />)
		expect(container).toMatchSnapshot()
		expect(container.getElementsByClassName('ygwys')[0]).toBeVisible()
	})
})

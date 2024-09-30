import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PreviewBanner from './PreviewBanner'

describe('PreviewBanner', () => {
	it('renders a PreviewBanner', () => {
		const { container, getByText } = render(<PreviewBanner />)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('previewBanner')[0]).toBeVisible()

		expect(
			getByText('You are currently viewing in Preview Mode.', {
				selector: 'span',
			})
		).toBeVisible()

		expect(
			container.getElementsByClassName('button false primary sm')[0]
		).toBeVisible()
		expect(
			getByText('Turn off preview mode', {
				selector: 'p',
			})
		).toBeVisible()
	})
})

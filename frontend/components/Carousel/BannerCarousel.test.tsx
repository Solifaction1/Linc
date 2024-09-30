import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import BannerCarousel from './BannerCarousel'

describe('BannerCarousel', () => {
	it('renders a BannerCarousel', () => {
		const testItem = {
			title: 'title',
			url: 'url',
		}

		const { container } = render(<BannerCarousel items={[testItem]} />)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('carousel')[0]).toBeVisible()
		expect(container.getElementsByClassName('carousel-root')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('carousel carousel-slider')[0]
		).toBeVisible()
		expect(
			container.getElementsByClassName('indicator selected')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('arrow prev')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('slider-wrapper axis-horizontal')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('slider animated')[0]).toBeVisible()
		expect(
			container.getElementsByClassName('slide selected previous')[0]
		).toBeVisible()
		expect(container.getElementsByClassName('slideContainer')[0]).toBeVisible()
	})
})

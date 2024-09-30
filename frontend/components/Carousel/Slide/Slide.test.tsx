import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Slide from './Slide'

describe('Slide', () => {
	it('renders a Slide', () => {
		const { container } = render(<Slide imgAlt="imgAlt" imgUrl="imgUrl" />)

		expect(container).toMatchSnapshot()

		expect(container.getElementsByClassName('slideContainer')[0]).toBeVisible()
		const img = container.querySelector('img')
		expect(img).toBeVisible()
		expect(img?.getAttribute('alt')).toEqual('imgAlt')
		expect(img?.getAttribute('src')).toEqual('imgUrl')
	})
})

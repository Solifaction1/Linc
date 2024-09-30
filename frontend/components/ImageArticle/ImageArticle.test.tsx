import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageArticle from './ImageArticle'
import { defaultProps } from './ImageArticle.config'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('ImageArticle', () => {
	it('renders an ImageArticle', () => {
		const { container, getByText } = render(<ImageArticle {...defaultProps} />)

		expect(container).toMatchSnapshot()

		expect(container.querySelector('article')).toBeVisible()
		expect(container.getElementsByClassName('imageArticle')[0]).toBeVisible()
		expect(container.getElementsByClassName('right')[0]).toBeVisible()

		expect(
			container.getElementsByClassName('imageArticleContainer')[0]
		).toBeVisible()
		expect(
			container.getElementsByClassName('imageArticleImage')[0]
		).toBeVisible()
		const img = container.querySelector('img')
		expect(img).toBeVisible()
		expect(img?.getAttribute('alt')).toEqual('name')
		expect(img?.getAttribute('width')).toEqual('0')
		expect(img?.getAttribute('height')).toEqual('0')
		expect(img?.getAttribute('style')).toEqual('color: transparent;')
		expect(img?.getAttribute('src')).toEqual(
			'/api/custom-loader?url=https%3A%2F%2Fvia.placeholder.com%2F400x500?q=100'
		)

		expect(
			container.getElementsByClassName('imageArticleText')[0]
		).toBeVisible()
		expect(
			getByText('Find out what our customers have to say.', { selector: 'h2' })
		).toBeVisible()
		expect(container.getElementsByClassName('text')[0]).toBeVisible()
		expect(container.getElementsByClassName('ygwys')[0]).toBeVisible()
		expect(getByText('description imageACTA', { selector: 'p' })).toBeVisible()
		const btn = container.querySelector('button')
		expect(
			container.getElementsByClassName('button false primary md false gray')[0]
		).toBeVisible()
		expect(btn?.getAttribute('type')).toEqual('button')
		expect(getByText('cta title', { selector: 'p' })).toBeVisible()
	})
})

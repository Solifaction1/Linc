import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { defaultProps } from './colorBlockCTA.config'
import ColorBlockCTA from './ColorBlockCTA'

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('ColorBlockCTA', () => {
	it('renders an ColorBlockCTA', () => {
		const { container, getByText } = render(<ColorBlockCTA {...defaultProps} />)
		expect(container).toMatchSnapshot()

		expect(container.querySelector('article')).toBeVisible()
		expect(container.getElementsByClassName('colorBlockCTA')[0]).toBeVisible()

		expect(container.getElementsByClassName('leftColorBlock')[0]).toBeVisible()
		expect(container.getElementsByClassName('leftContainer')[0]).toBeVisible()
		expect(container.getElementsByClassName('text')[0]).toBeVisible()
		expect(container.getElementsByClassName('ygwys')[0]).toBeVisible()
		expect(
			getByText('description bottom left', { selector: 'p' })
		).toBeVisible()
		expect(container.getElementsByClassName('cta')[0]).toBeVisible()
		const btnLeft = container.querySelectorAll('button')[0]
		expect(btnLeft?.getAttribute('class')).toEqual(
			'button false primary md false  lightBlue'
		)
		expect(btnLeft?.getAttribute('type')).toEqual('button')
		expect(getByText('Afspraak maken', { selector: 'p' })).toBeVisible()

		expect(container.getElementsByClassName('rightColorBlock')[0]).toBeVisible()
		expect(container.getElementsByClassName('rightContainer')[0]).toBeVisible()
		expect(container.getElementsByClassName('text')[1]).toBeVisible()
		expect(container.getElementsByClassName('ygwys')[1]).toBeVisible()
		expect(
			getByText('description bottom right', { selector: 'p' })
		).toBeVisible()
		expect(container.getElementsByClassName('cta')[1]).toBeVisible()
		const btnRight = container.querySelectorAll('button')[1]
		expect(btnRight?.getAttribute('class')).toContain(
			'button false primary md false  darkBlue'
		)
		expect(btnRight?.getAttribute('type')).toEqual('button')
		expect(getByText('Contact', { selector: 'p' })).toBeVisible()
	})
})

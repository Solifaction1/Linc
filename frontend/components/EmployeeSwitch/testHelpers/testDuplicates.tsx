import { Matcher, SelectorMatcherOptions } from '@testing-library/react'

const testDuplicates = (
	container: HTMLElement,
	getByText: (
		id: Matcher,
		options?: SelectorMatcherOptions | undefined
	) => HTMLElement
) => {
	expect(
		container.getElementsByClassName('employeeSwitch className')[0]
	).toBeVisible()

	expect(
		container.getElementsByClassName('employeeLink activeLang')[0]
	).toBeVisible()
	expect(getByText('title', { selector: 'button' })).toBeVisible()
	expect(container.querySelector('svg')).toBeVisible()
	expect(container.querySelector('path')).toBeVisible()

	expect(container.getElementsByClassName('dropDown')[0]).toBeVisible()
}

export default testDuplicates

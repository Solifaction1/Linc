import { Matcher, SelectorMatcherOptions } from '@testing-library/react'

const testListWithOneEmployee = (
	container: HTMLElement,
	getByText: (
		id: Matcher,
		options?: SelectorMatcherOptions | undefined
	) => HTMLElement,
	urlListIndex: number,
	urlListWrapperIndex: number,
	text: string
) => {
	expect(
		container.getElementsByClassName('urlList')[urlListIndex]
	).toBeVisible()
	const firstUrlListWrapper =
		container.getElementsByClassName('urlListWrapper')[urlListWrapperIndex]
	expect(firstUrlListWrapper).toBeVisible()
	expect(
		firstUrlListWrapper.contains(getByText(text, { selector: 'a' }))
	).toBeTruthy()
}

export default testListWithOneEmployee

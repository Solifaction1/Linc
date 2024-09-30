import { Matcher, SelectorMatcherOptions } from '@testing-library/react'

const testListWithTwoEmployees = (
	container: HTMLElement,
	getByText: (
		id: Matcher,
		options?: SelectorMatcherOptions | undefined
	) => HTMLElement,
	urlListIndex: number,
	urlListWrapperFirstIndex: number,
	firstText: string,
	urlListWrapperSecondIndex: number,
	secondString: string
) => {
	expect(
		container.getElementsByClassName('urlList')[urlListIndex]
	).toBeVisible()
	const firstUrlListWrapper =
		container.getElementsByClassName('urlListWrapper')[urlListWrapperFirstIndex]

	expect(firstUrlListWrapper).toBeVisible()
	expect(
		firstUrlListWrapper.contains(getByText(firstText, { selector: 'a' }))
	).toBeTruthy()

	const secondUrlListWrapper =
		container.getElementsByClassName('urlListWrapper')[
			urlListWrapperSecondIndex
		]
	expect(secondUrlListWrapper).toBeVisible()
	expect(
		secondUrlListWrapper.contains(getByText(secondString, { selector: 'a' }))
	).toBeTruthy()
}

export default testListWithTwoEmployees

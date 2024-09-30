import { Matcher, SelectorMatcherOptions } from '@testing-library/react'

const testFirstListWithThreeEmployees = (
	container: HTMLElement,
	getByText: (
		id: Matcher,
		options?: SelectorMatcherOptions | undefined
	) => HTMLElement
) => {
	expect(container.getElementsByClassName('urlList')[0]).toBeVisible()
	const firstUrlListWrapper =
		container.getElementsByClassName('urlListWrapper')[0]

	expect(firstUrlListWrapper).toBeVisible()
	expect(
		firstUrlListWrapper.contains(
			getByText('aFirstName aName', { selector: 'a' })
		)
	).toBeTruthy()

	const secondUrlListWrapper =
		container.getElementsByClassName('urlListWrapper')[1]
	expect(secondUrlListWrapper).toBeVisible()
	expect(
		secondUrlListWrapper.contains(
			getByText('bFirstName bName', { selector: 'a' })
		)
	).toBeTruthy()

	const thirdUrlListWrapper =
		container.getElementsByClassName('urlListWrapper')[2]
	expect(thirdUrlListWrapper).toBeVisible()
	expect(
		thirdUrlListWrapper.contains(
			getByText('cFirstName cName', { selector: 'a' })
		)
	).toBeTruthy()
}

export default testFirstListWithThreeEmployees

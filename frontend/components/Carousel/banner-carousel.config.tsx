interface Item {
	/**
	 * The content of the button
	 */
	title: string
	/**
	 * The content of the button
	 */
	url: string
}

interface propsConfig {
	/**
	 * The content items of the carousel
	 */
	items: Array<Item>
	/**
	 * Show number of current slide/total
	 */
	showStatus?: boolean
	/**
	 * Show navigation arrows
	 */
	showArrows?: boolean
	/**
	 * Show indicators of number of slide at the bottom
	 */
	showIndicators?: boolean
	/**
	 * If swiping is supported or not
	 */
	swipeable?: boolean
	/**
	 * Continue upon reaching end of carousel
	 */
	infiniteLoop?: boolean
	/**
	 * Block vertical scroll from scrolling down when user is scrolling on carousel
	 */
	preventMovementUntilSwipeScrollTolerance?: boolean
	/**
	 * Allow navigation through keyboard
	 */
	useKeyboardArrows?: boolean
	/**
	 * Automatically navigate through slides
	 */
	autoPlay?: boolean
	/**
	 * Enable swipe on non-touch screens when swipeable is true
	 */
	 emulateTouch?: boolean
	/**
	 * How many pixels it's needed to change the slide when swiping
	 */
	 swipeScrollTolerance?: number
}

const defaultProps = {
	items: [
		{
			title: 'test',
			url: 'https://place-hold.it/1000x400',
		},
		{
			title: 'test',
			url: 'https://place-hold.it/1000x400',
		},
		{
			title: 'test',
			url: 'https://place-hold.it/1000x400',
		},
	],
	showStatus: false,
	showArrows: true,
	showIndicators: true,
	swipeable: true,
	infiniteLoop: true,
	preventMovementUntilSwipeScrollTolerance: true,
	useKeyboardArrows: true,
	autoPlay: false,
	emulateTouch: true,
	swipeScrollTolerance: 35,
}

export type { Item, propsConfig }
export { defaultProps }

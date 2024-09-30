import React from 'react'

import styles from './indicator.module.scss'

const Indicator = (
	onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
	isSelected: boolean,
	index: number,
	label: string
) => {
	return (
		<button
            type="button"
			className={`
				${styles.indicator}
				${isSelected && styles.selected}
			`}
			onClick={onClickHandler}
			onKeyDown={onClickHandler}
			value={index}
			key={index}
			tabIndex={0}
			aria-label={`${label} ${index + 1}`}
		/>
	)
}

Indicator.displayName = 'Indicator'

export default Indicator

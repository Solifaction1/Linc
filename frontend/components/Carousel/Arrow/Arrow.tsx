import React from 'react'
import styles from './arrow.module.scss'

const Arrow =
	(direction: string, showArrows: boolean) => (clickHandler: React.MouseEventHandler) => {
		if (!showArrows) return null;
		return (
			<button
                aria-label={direction}
				type="button"
				onClick={clickHandler}
				className={`
					${styles.arrow}
					${direction === 'prev' ? styles.prev : styles.next}
				`}
			/>
		)
	}

Arrow.displayName = 'Arrow';

export default Arrow

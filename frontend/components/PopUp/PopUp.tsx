import React, { useRef, useEffect } from 'react'

import { defaultProps, propsConfig } from './popUp.config'
import styles from './popUp.module.scss'
import ActionButton from './ActionButton/ActionButton'

const PopUp: React.FC<propsConfig> = (props: propsConfig) => {
	const wrapperRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (wrapperRef.current === e.target) {
				if (props.allowClickOut && props.closePopUp !== undefined)
					props.closePopUp()
			}
		}

		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				if (props.allowKeyPress && props.closePopUp !== undefined)
					props.closePopUp()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('keydown', handleKeyPress)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleKeyPress)
		}
	}, [])

	return (
		<>
			{props.backgroundBlur && (
				<div className={styles.backgroundBlur} ref={wrapperRef} />
			)}
			<div
				className={`${props.className} ${styles.popUp} ${
					props.open && styles.open
				}`}
			>
				{props.children}
				<ActionButton
					buttonType="close"
					className={styles.closeButton}
					handleClick={() => props.closePopUp && props.closePopUp()}
				/>
			</div>
		</>
	)
}

PopUp.defaultProps = defaultProps

export default PopUp

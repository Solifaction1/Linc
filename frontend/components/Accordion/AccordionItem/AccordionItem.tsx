import React, { useRef, useEffect, useState } from 'react'

import styles from '@components/Accordion/AccordionItem/accordionitem.module.scss'
import SwitchIcon from '@templates/SwitchIcon'
import AccordionData from '@models/accordion.model'
import { Icon } from '@templates/switch-icon.config'

const AccordionItem: React.FC<AccordionData> = (props: AccordionData) => {
	const buttonRef = useRef<HTMLButtonElement>(null)
	const bodyRef = useRef<HTMLDivElement>(null)
	const [isActive, setIsActive] = useState<boolean | null>(null)

	const [height, setHeight] = useState(0)

	const validateHeight = () => {
		const buttonHeight = buttonRef.current?.clientHeight ?? 0
		const bodyHeight = bodyRef.current?.clientHeight ?? 0
		setHeight(isActive ? buttonHeight + bodyHeight : buttonHeight)
	}

	useEffect(() => {
		validateHeight()
		window.addEventListener('resize', () => validateHeight())
	}, [isActive, height])

	return (
		<div>
			<div
				className={`${styles.section} ${isActive ? styles.active : ''}`}
				key={props.title}
				style={{ height: `${height}px` }}
			>
				<button
					type="button"
					ref={buttonRef}
					className={styles.accordionButton}
					onClick={() => setIsActive(!isActive)}
				>
					<h4 className={styles.title}>{props.title}</h4>

					<div className={styles.arrowWrapper}>
						<SwitchIcon
							className={`${isActive && styles.active} ${styles.arrow}`}
							icon={isActive ? Icon.ANGLE_UP : Icon.ANGLE_DOWN}
						/>
					</div>
				</button>
			</div>
			<div
				style={{ display: isActive ? 'unset' : 'none' }}
				ref={bodyRef}
				className={styles.accordionContainer}
			>
				{props.children}
			</div>
		</div>
	)
}

export default AccordionItem

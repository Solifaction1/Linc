import React, { useRef } from 'react'

import { defaultProps, propsConfig } from './textArea.config'
import styles from './text-area.module.scss'

const VerticalList = (props: propsConfig) => {
	const inputRef = useRef(null)

	// Functions
	const handleChange = (e: string) => {
		props.onChange(inputRef, e)
	}

	// Hooks

	return (
		<div className={`${styles.container}`}>
			<label htmlFor={props.id}>{props.label}</label>
			<textarea
				id={props.id}
				ref={inputRef}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	)
}

VerticalList.defaultProps = defaultProps

export default VerticalList

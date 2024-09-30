/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react'
import { defaultProps, propsConfig } from './input.config'
import styles from './input.module.scss'

const Input: React.FC<propsConfig> = (props: propsConfig) => {
	// State
	const [value, setValue] = useState(props.value ? props.value : '')
	const [isDirty, setIsDirty] = useState(false)
	const inputRef = useRef(null)

	// Functions
	const handleChange = (e: string, type: string) => {
		setValue(e)
	}

	// Hooks
	useEffect(() => {
		if (props.onChange && isDirty) {
			props.onChange(inputRef, value, isDirty)
			setIsDirty(false)
		}
	}, [isDirty, props, value])

	return (
		<input
			{...props.register(`${props.placeholder?.toLowerCase()}`)}
			className={`${styles.input} ${props.className} ${
				props.errorMessage && styles.error
			}`}
			id={props.id}
			type={props.type}
			value={value}
			ref={inputRef}
			placeholder={`${props.placeholder} ${props.required ? '*' : ''}`}
			disabled={props.disabled}
			required={props.required}
			onBlur={(e) => !isDirty && setIsDirty(e.target.value !== '')}
			onChange={(e) => handleChange(e.target.value, e.target.type)}
		/>
	)
}

Input.defaultProps = defaultProps

export default Input

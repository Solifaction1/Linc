import React, { useState, useEffect, useRef } from 'react'
import { defaultProps, propsConfig } from './select.config'
import validateField from './select.utils'
import styles from './select.module.scss'

const Select: React.FC<propsConfig> = (props: propsConfig) => {
	const [value, setValue] = useState(props.value ? props.value : '')
	const [isDirty, setIsDirty] = useState(false)
	const inputRef = useRef(null)

	const handleChange = (e: string, type: string) => {
		setValue(validateField(e, type))
	}

	useEffect(() => {
		if (props.onChange) props.onChange(inputRef, value)
	}, [value])

	return (
		<div className={`${styles.container}`}>
			<label htmlFor={props.id}>{props.label}</label>
			<select
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props.register(`${props.placeholder?.toLowerCase()}`)}
				className={`${styles.select} ${props.className} ${
					props.errorMessage && styles.error
				} `}
				id={props.id}
				value={value}
				ref={inputRef}
				disabled={props.disabled}
				required={props.required}
				onBlur={(e) => !isDirty && setIsDirty(e.target.value !== '')}
				onChange={(e) => handleChange(e.target.value, e.target.type)}
			>
				{props.options &&
					props.options.map((option: any) => (
						<option key={`option-${option}`} value={option}>
							{option}
						</option>
					))}
			</select>
			{props.errorMessage && (
				<p className={`${styles.error} ${styles[props.size || 'sm']}`}>
					{props.errorMessage}
				</p>
			)}
		</div>
	)
}

Select.defaultProps = defaultProps

export default Select

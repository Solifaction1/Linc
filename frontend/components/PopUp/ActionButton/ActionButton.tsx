import React from 'react'

import { defaultProps, propsConfig } from './actionButton.config'
import styles from './actionButton.module.scss'

const ActionButton: React.FC<propsConfig> = (props: propsConfig) => {
	return (
		<button
			type="button"
			className={`
			${props.className} 
			${styles.actionButton} 
			${styles[props.buttonType || 'primary']} 
			${styles[props.size || 'md']}`}
			disabled={props.disabled}
			onClick={props.handleClick || ((e) => e.preventDefault())}
		>
			<div />
			<div />
		</button>
	)
}

ActionButton.defaultProps = defaultProps

export default ActionButton

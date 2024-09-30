import React from 'react'
import { Icon } from '@templates/switch-icon.config'
import SwitchIcon from '@templates/SwitchIcon'

import { defaultProps, propsConfig } from './Button.config'
import styles from './button.module.scss'

const Button: React.FC<propsConfig> = (props: propsConfig) => {
	return (
		<button
			type={props.buttonType === 'submit' ? 'submit' : 'button'}
			className={`${styles.button} ${props.isLoading && styles.isLoading} ${
				styles[props.buttonType || 'primary']
			} ${styles[props.size || 'sm']} ${!props.label && styles.noLabel} ${
				props.className && props.className
			} ${props.color && styles[props.color]}`}
			disabled={props.disabled || props.isLoading}
			onClick={
				props.buttonType !== 'submit'
					? props.handleClick || ((e) => e.preventDefault())
					: undefined
			}
		>
			{props.children}
			<p className={styles.label}>{props.label && props.label}</p>
			{props.icon && (
				<SwitchIcon icon={props.icon ? props.icon : Icon.ANGLE_RIGHT} />
			)}
		</button>
	)
}

Button.defaultProps = defaultProps

export default Button

import React from 'react'
import ColorBlockData from '@models/colorBlockCTA.model'
import YGWYS from '@components/YGWYS/YGWYS'
import SwitchCTA from '@templates/SwitchCTA'
import { defaultProps } from './colorBlockCTA.config'

import styles from './colorBlockCTA.module.scss'

const ColorBlockCTA = (props: ColorBlockData) => {
	return (
		<article className={styles.colorBlockCTA}>
			<div className={styles.leftColorBlock}>
				<div className={styles.leftContainer}>
					{props.ctas[0].description?.text && (
						<div className={styles.text}>
							<YGWYS text={props.ctas[0].description?.text} />
						</div>
					)}
					{props.ctas[0].cta?.link && (
						<div className={styles.cta}>
							<SwitchCTA ctaData={props.ctas[0].cta} color='lightBlue'/>
						</div>
					)}
				</div>
			</div>

			<div className={styles.rightColorBlock}>
				<div className={styles.rightContainer}>
					{props.ctas[1].description?.text && (
						<div className={styles.text}>
							<YGWYS text={props.ctas[1].description?.text} />
						</div>
					)}
					{props.ctas[1].cta?.link && (
						<div className={styles.cta}>
							<SwitchCTA ctaData={props.ctas[1].cta} color='darkBlue'/>
						</div>
					)}
				</div>
			</div>
		</article>
	)
}

ColorBlockCTA.defaultProps = defaultProps

export default ColorBlockCTA

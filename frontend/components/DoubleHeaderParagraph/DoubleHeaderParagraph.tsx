import React from 'react'
import SwitchCTA from '@templates/SwitchCTA'
import YGWYS from '@components/YGWYS/YGWYS'
import DoubleHeaderParagraphData from '@models/doubleHeaderParagraph.model'
import { defaultProps } from './doubleHeaderParagraph.config'
import styles from './double-header-paragraph.module.scss'

const DoubleHeaderParagraph = (props: DoubleHeaderParagraphData) => (
	<div className={styles.verticalAccordion}>
		<article>
			<YGWYS text={props.leftParagraph.text} />
			{props.leftCta && (
				<SwitchCTA className={styles.cta} ctaData={props.leftCta} />
			)}
		</article>
		<article>
			<YGWYS text={props.rightParagraph.text} />
			{props.rightCta && (
				<SwitchCTA className={styles.cta} ctaData={props.rightCta} />
			)}
		</article>
	</div>
)

DoubleHeaderParagraph.defaultProps = defaultProps

export default DoubleHeaderParagraph

import React from 'react'
import SwitchCTA from '@templates/SwitchCTA'
import YGWYS from '@components/YGWYS/YGWYS'
import VerticalListData from '@models/verticalList.model'
import { defaultProps } from './verticalList.config'
import styles from './vertical-list.module.scss'

const VerticalList = (props: VerticalListData) => (
	<article className={styles.verticalAccordion}>
		<div
			className={`${
				props.location === 'left' ? styles.rightBlock : styles.leftBlock
			}`}
		>
			<div
				className={`${
					props.location === 'left'
						? styles.rightContainer
						: styles.leftContainer
				}`}
			>
				{props.titles.map((item) => (
					<p className={styles.listItem} key={item.id}>
						{item.title}
					</p>
				))}
			</div>
		</div>
		<div
			className={`${
				props.location === 'left' ? styles.leftBlock : styles.rightBlock
			} ${styles.descriptionBlock}`}
		>
			<div
				className={`${
					props.location === 'left'
						? styles.leftContainer
						: styles.rightContainer
				}`}
			>
				<div>
					<h2>{props.description.title}</h2>
					{props.description.description && (
						<div className={styles.content}>
							<YGWYS text={props.description.description.text} />
						</div>
					)}
					{props.description.cta && (
						<SwitchCTA ctaData={props.description.cta} />
					)}
				</div>
			</div>
		</div>
	</article>
)

VerticalList.defaultProps = defaultProps

export default VerticalList

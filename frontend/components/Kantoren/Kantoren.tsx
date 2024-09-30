import React from 'react'
import sanitizeHtml from 'sanitize-html'
import KantorenData from '@models/kantoren.model'
import YGWYS from '@components/YGWYS/YGWYS'
import Button from '@components/Button/Button'
import { defaultProps } from './kantoren.config'
import styles from './kantoren.module.scss'

const Kantoren = (props: KantorenData) => {
	return (
		<section className={styles.kantoor}>
			<div className={styles.kantoorInformation}>
				{props.title && <h2>{props.title}</h2>}
				{props.description?.text && (
					<div className={styles.text}>
						<YGWYS text={props.description?.text} />
					</div>
				)}
			</div>

			<div className={styles.kantorenContainer}>
				<div className={styles.kantorenWrapper}>
					{props.kantoorCollection?.data.map((kantoor) => (
						<div className={styles.kantoor} key={kantoor.id}>
							<p className={styles.title}>{kantoor.attributes.title}</p>
							{kantoor.attributes.adress && (
								<p
									className={styles.adress}
									dangerouslySetInnerHTML={{
										__html: sanitizeHtml(
											JSON.stringify(kantoor.attributes.adress)
												.replace(/\\n/g, '<br/>')
												.replace(/"([^"]*)"/g, '$1')
										),
									}}
								/>
							)}
							{kantoor.attributes.phone && (
								<a
									className={styles.phone}
									href={`tel:${kantoor.attributes.phone}`}
								>
									Tel.: {kantoor.attributes.phone}
								</a>
							)}
							<br />
							{kantoor.attributes.email && props.ctaLabel && (
								<Button
									label={props.ctaLabel}
									className={styles.button}
									handleClick={() => {
										window.open(`mailto:${kantoor.attributes.email}`)
									}}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

Kantoren.defaultProps = defaultProps

export default Kantoren

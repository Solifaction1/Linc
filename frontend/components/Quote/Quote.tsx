import React from 'react'
import QuoteData from '@models/quote.model'
import { defaultProps } from './quote.config'
import styles from './quote.module.scss'

const Quote: React.FC<QuoteData> = (props: QuoteData) => (
	<section className={styles.quote}>
		<div className={styles.title}>{props.title}</div>

		{props.employee.data && (
			<p className={styles.author}>
				{`${props.employee.data.attributes.firstName} ${
					props.employee.data.attributes.name
				}${
					props.employee.data.attributes.role !== null
						? ` - ${props.employee.data.attributes.role}`
						: ''
				}${
					props.employee.data.attributes.rechtsdomeinen.data.length > 0
						? props.employee.data.attributes.rechtsdomeinen.data.map(
								(rechtsdomein) => ` - ${rechtsdomein.attributes.title}`
						  )
						: ''
				}`}
			</p>
		)}
	</section>
)

Quote.defaultProps = defaultProps

export default Quote

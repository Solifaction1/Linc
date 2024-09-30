import React from 'react'
import Image from 'next/image'
import RechtsdomeinenAccordionItemData from '@models/rechtsdomeinenAccordionItem.model'
import YGWYS from '@components/YGWYS/YGWYS'
import styles from './rechtsdomeinen-accordion-item.module.scss'
import RechtsdomeinenSidebar from './RechtsdomeinenSidebar/RechtsdomeinenSidebar'

const RechtsdomeinenAccordionItem: React.FC<RechtsdomeinenAccordionItemData> = (
	props: RechtsdomeinenAccordionItemData
) => (
	<section className={styles.rechtsdomeinenAccordionItem}>
		<section className={styles.rechtsdomeinenWrapper}>
			<YGWYS className={styles.text} text={props.description?.text ?? ''} />

			{props.image?.data && (
				<div>
					<Image
						className={styles.image}
						src={props.image.data.attributes.url ?? ''}
						alt={props.image.data.attributes.alternativeText ?? ''}
						height={props.image.data.attributes.height}
						width={props.image.data.attributes.width}
						priority
						loader={() => {
							return `/api/custom-loader?url=${encodeURIComponent(
								props.image?.data?.attributes.url ?? ''
							)}?q=${100}`
						}}
					/>
				</div>
			)}
		</section>

		{props.rechtsdomeinenSideBarData && (
			<RechtsdomeinenSidebar {...props.rechtsdomeinenSideBarData} />
		)}
	</section>
)

export default RechtsdomeinenAccordionItem

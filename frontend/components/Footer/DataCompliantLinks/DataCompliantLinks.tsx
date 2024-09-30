import React from 'react'
import { Navigation } from '@models/navigation.model'
import Link from '@components/Link/Link'
import LanguageSwitch from '@components/Language-switch/LanguageSwitch'
import { Localizations } from '@models/attributes.model'
import styles from './data-compliant-links.module.scss'

const DataCompliantLinks = (props: {
	className: string
	dataCompliantLinks: Navigation[]
	localizations: Localizations | undefined
}) => {
	const today = new Date()

	return (
		<div className={`${styles.dataCompliantLinks} ${props.className}`}>
			<div className={styles.dataCompliantLinksCollection}>
				<p className={styles.copyright}>
					Copyright linc.legal {today.getFullYear()}
				</p>

				<div className={styles.languageSwitch}>
					<LanguageSwitch localizations={props.localizations} />
				</div>

				<div className={styles.links}>
					{props.dataCompliantLinks?.map((dataCompliantLink) => (
						<Link
							linkType="link"
							href={`/${dataCompliantLink.path}`}
							key={dataCompliantLink.id}
							className={styles.link}
						>
							<p>{dataCompliantLink.title}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default DataCompliantLinks

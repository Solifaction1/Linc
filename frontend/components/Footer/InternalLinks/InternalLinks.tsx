import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { Navigation } from '@models/navigation.model'
import Link from '@components/Link/Link'

import { BREAKPOINTS } from '@constants/breakpoints'
import LanguageSwitch from '@components/Language-switch/LanguageSwitch'
import { Localizations } from '@models/attributes.model'
import styles from '../footer.module.scss'

const InternalLinks = (props: {
	internalLinksData: Navigation[]
	localizations: Localizations | undefined
}) => {
	const isMobile = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.md}px)` })

	const getItems = () => (
		<div className={styles.internalLinks}>
			{props.internalLinksData.map((parent) => {
				switch (parent.path) {
					case 'data-compliant-links':
					case 'contact':
					case 'privacy-policy':
					case 'cookies-policy':
					case 'terms-and-conditions':
					case 'privacy-beleid':
					case 'cookies-beleid':
					case 'algemene-voorwaarden':
					case 'politique-de-confidentialite':
					case 'politique-des-cookies':
					case 'conditions-generales':
					case 'social-media':
						return null
					default:
						return (
							<Link
								linkType="link"
								key={parent.id}
								href={`/${parent.path}`}
								className={styles.link}
							>
								<p>{parent.title}</p>
							</Link>
						)
				}
			})}
		</div>
	)

	return isMobile ? (
		<div className={styles.internalLinksWrapper}>
			{getItems()}
			<div className={styles.languageSwitch}>
				<LanguageSwitch localizations={props.localizations} />
			</div>
		</div>
	) : (
		<>{getItems()}</>
	)
}

export default InternalLinks

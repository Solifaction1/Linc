import React, { useRef, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
// import { getRewrites } from '@constants/rewrites'
import { Icon } from '@templates/switch-icon.config'
import SwitchIcon from '@templates/SwitchIcon'
import { defaultProps, languageData } from './languageSwitch.config'

import styles from './languageSwitch.module.scss'

const LanguageSwitch: React.FC<languageData> = (props: languageData) => {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const urlWrapper = useRef<HTMLDivElement>(null)

	// const getLocalizedSlug = (lang: string) => {
	// 	const rewrites = getRewrites()
	// 	const slpitPathname = router.pathname.split('/')
	// 	const slicedPathname = router.pathname.replace(
	// 		`/${slpitPathname[slpitPathname.length - 1]}`,
	// 		''
	// 	)

	// 	if (slicedPathname === '') return ''

	// 	try {
	// 		return rewrites.translations[slicedPathname][lang]
	// 	} catch {
	// 		console.error(
	// 			`ERROR: make sure you added the translation for: ${slicedPathname} to the rewrites`,
	// 			rewrites.translations
	// 		)
	// 	}
	// 	return ''
	// }

	return (
		<div className={styles.languageSwitch}>
			<button
				className={`${styles.languageLink} ${styles.activeLang}`}
				type="button"
				onClick={() => setOpen((prevstate) => !prevstate)}
			>
				{router.locale?.toUpperCase()}
				<SwitchIcon
					className={`${open && styles.active} ${styles.arrow}`}
					icon={Icon.ANGLE_DOWN}
				/>
			</button>
			<div
				className={styles.accordionWrapper}
				style={{
					height: open ? urlWrapper.current?.clientHeight : 0,
				}}
			>
				<div className={styles.languageLinkWrapper} ref={urlWrapper}>
					{props.localizations &&
						props.localizations.data &&
						props.localizations.data.map((item) => (
							<NextLink
								className={styles.languageLink}
								key={item.id}
								href={item.attributes.slug ?? ''}
								locale={item.attributes.locale}
							>
								{item.attributes.locale.toUpperCase()}
							</NextLink>
						))}
				</div>
			</div>
		</div>
	)
}

LanguageSwitch.defaultProps = defaultProps

export default LanguageSwitch

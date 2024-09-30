import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import { Navigation } from '@models/navigation.model'
import { Localizations } from '@models/attributes.model'
import { BREAKPOINTS } from '@constants/breakpoints'
import DataCompliantLinks from './DataCompliantLinks/DataCompliantLinks'
import styles from './footer.module.scss'
import IconsRow from './IconsRow/IconsRow'
import InternalLinks from './InternalLinks/InternalLinks'

const Footer = ({
	internalLinksData,
	localizations,
}: {
	internalLinksData: Navigation[]
	localizations: Localizations | undefined
}) => {
	const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.md })

	const socialMediaItem = internalLinksData.find(
		(navigationitem) => navigationitem.path === 'social-media'
	)

	const contactItem = internalLinksData.find(
		(navigationitem) => navigationitem.path === 'contact'
	)

	const dataCompliantLinksItems = internalLinksData.filter(
		(navigationitem) => navigationitem.parent?.path === 'data-compliant-links'
	)

	return (
		<footer className={styles.footer}>
			<section className={styles.footerWrapper}>
				<div>
					<Link href="/">
						{isMobile ? (
							<Image
								src="/images/logo.svg"
								alt="logo"
								width={112}
								height={44}
								className={styles.logo}
								priority
								quality={60}
							/>
						) : (
							<Image
								src="/images/logo.svg"
								alt="logo"
								width={172}
								height={68}
								className={styles.logo}
								priority
								quality={60}
							/>
						)}
					</Link>
				</div>

				<InternalLinks
					internalLinksData={internalLinksData}
					localizations={localizations}
				/>

				<IconsRow
					contactItem={contactItem}
					facebookLink={socialMediaItem?.related?.facebook ?? ''}
					linkedInLink={socialMediaItem?.related?.linkedin ?? ''}
				/>
			</section>

			<section className={styles.dataCompliantLinksWrapper}>
				{dataCompliantLinksItems.length > 0 && (
					<DataCompliantLinks
						className={styles.dataCompliantLinks}
						dataCompliantLinks={dataCompliantLinksItems}
						localizations={localizations}
					/>
				)}
			</section>
		</footer>
	)
}

export default Footer

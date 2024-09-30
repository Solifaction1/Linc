/* eslint-disable react/require-default-props */
import React from 'react'
import { useTranslation } from 'next-i18next'
import { useMediaQuery } from 'react-responsive'
import SwitchIcon from '@templates/SwitchIcon'
import { Icon } from '@templates/switch-icon.config'
import { Navigation } from '@models/navigation.model'
import SwitchCTA from '@templates/SwitchCTA'
import { BREAKPOINTS } from '@constants/breakpoints'
import styles from './icons-row.module.scss'

const IconsRow = (props: {
	contactItem: Navigation | undefined
	facebookLink: string
	linkedInLink: string
	className?: string
}) => {
	const { t } = useTranslation('common')
	const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.lg })

	return (
		<div className={`${styles.iconsRow} ${props.className}`}>
			{props.contactItem && (
				<div className={styles.link}>
					<SwitchCTA
						ctaData={{
							title: props.contactItem.title,
							link: props.contactItem.path ?? '',
							externalLink: false,
							buttonType: 'Button primary',
						}}
					/>
				</div>
			)}

			{!isTablet && <p className={styles.text}>{t('follow_us')}</p>}

			{props.linkedInLink && (
				<a href={props.linkedInLink}>
					<SwitchIcon icon={Icon.LINKEDIN} className={styles.icon} />
				</a>
			)}

			{props.facebookLink && (
				<a href={props.facebookLink}>
					<SwitchIcon icon={Icon.FACEBOOK} className={styles.icon} />
				</a>
			)}
		</div>
	)
}

export default IconsRow

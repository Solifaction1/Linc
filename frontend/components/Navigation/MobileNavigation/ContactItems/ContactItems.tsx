import React from 'react'
import { Navigation } from '@models/navigation.model'
import SwitchCTA from '@templates/SwitchCTA'
import SwitchIcon from '@templates/SwitchIcon'
import { Icon } from '@templates/switch-icon.config'
import styles from './contact-items.module.scss'

const ContactItems = ({
	contactItem,
	socialMediaItem,
	contactButtonClassName,
	contactIconsClassName,
	color,
}: {
	contactItem: Navigation
	socialMediaItem: Navigation | undefined
	contactButtonClassName: string
	contactIconsClassName: string
	color: string | undefined
}) => (
	<div className={styles.contactItems}>
		<SwitchCTA
			ctaData={{
				title: contactItem.title,
				link: `/${contactItem?.path}` ?? '',
				externalLink: false,
				buttonType: 'Button tertiary',
			}}
			className={contactButtonClassName}
			color={color}
		/>

		{socialMediaItem && (
			<>
				<a href={socialMediaItem.related?.linkedin} className={styles.link}>
					<SwitchIcon
						icon={Icon.LINKEDIN}
						className={`${styles.icon} ${contactIconsClassName}`}
					/>
				</a>
				<a href={socialMediaItem.related?.facebook} className={styles.link}>
					<SwitchIcon
						icon={Icon.FACEBOOK}
						className={`${styles.icon} ${contactIconsClassName}`}
					/>
				</a>
			</>
		)}
	</div>
)

export default ContactItems

/* eslint-disable max-lines */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@models/navigation.model'
import LanguageSwitch from '@components/Language-switch/LanguageSwitch'
import { Localizations } from '@models/attributes.model'
import { getColor, getColorHeader } from '@constants/color'
import EmployeeData from '@models/employee.model'
import EmployeeSwitch from '@components/EmployeeSwitch/EmployeeSwitch'
import { getUniqueId } from '@utils/utils.service'
import styles from './mobileNavigation.module.scss'
import ContactItems from './ContactItems/ContactItems'

const MobileNavigation = ({
	internalLinksData,
	employeesData,
	className,
	contactButtonClassName,
	contactIconsClassName,
	localizations,
	color,
}: {
	internalLinksData: Navigation[]
	employeesData: { data: EmployeeData[] }
	className: string
	contactButtonClassName: string
	contactIconsClassName: string
	localizations: Localizations | undefined
	color: string | undefined
}) => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const body = document.querySelector('body')
		if (body) body.style.overflow = open ? 'hidden' : 'auto'
	}, [open])

	const socialMediaItem = internalLinksData.find(
		(navigationitem) => navigationitem.path === 'social-media'
	)

	return (
		<div
			className={`${styles.navigationWrapper} ${
				open && styles.open
			} ${className} ${styles[getColor(color ?? '')]}`}
			role="button"
			tabIndex={0}
		>
			<header className={styles.navigationHeader}>
				<Link href="/">
					{color === 'beige' || color === 'blue-gray' || color === 'white' ? (
						<Image
							src="/images/logo-gray.svg"
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
							width={112}
							height={44}
							className={styles.logo}
							priority
							quality={60}
						/>
					)}
				</Link>
				<button
					type="button"
					onClick={() => setOpen((prevstate) => !prevstate)}
					className={`${styles.hamburgerIcon} ${styles[getColor(color ?? '')]}`}
				>
					<div className={open ? styles.open : ''} />
					<div className={open ? styles.open : ''} />
					<div className={open ? styles.open : ''} />
				</button>
			</header>
			<ul
				className={`${styles.navigationContainer} ${className} ${
					open && styles.open
				}`}
			>
				{internalLinksData.map((item) => {
					if (item.path === 'contact') {
						return (
							<ContactItems
								contactItem={item}
								socialMediaItem={socialMediaItem}
								contactButtonClassName={contactButtonClassName}
								contactIconsClassName={contactIconsClassName}
								color={`${getColorHeader(color ?? '')}`}
								key={item.id}
							/>
						)
					}

					if (item.path === 'social-media') return ''

					if (item.path === 'team') {
						return (
							<EmployeeSwitch
								parent={item}
								employeeData={employeesData}
								key={getUniqueId()}
								className={styles.navigationMainLinkWrapper}
							/>
						)
					}

					return (
						<div key={item.id} className={styles.navigationMainLinkWrapper}>
							<Link
								href={`/${item?.path}`}
								replace
								className={styles.navigationMainLink}
							>
								<li>{item.title}</li>
							</Link>
						</div>
					)
				})}

				<div className={styles.languageSwitch}>
					<LanguageSwitch localizations={localizations} />
				</div>
			</ul>
		</div>
	)
}

export default MobileNavigation

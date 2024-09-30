import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@models/navigation.model'
import LanguageSwitch from '@components/Language-switch/LanguageSwitch'
import { Localizations } from '@models/attributes.model'
import SwitchCTA from '@templates/SwitchCTA'
import { getColorHeader } from '@constants/color'
import EmployeeData from '@models/employee.model'
import EmployeeSwitch from '@components/EmployeeSwitch/EmployeeSwitch'
import { getUniqueId } from '@utils/utils.service'
import styles from './desktopNavigation.module.scss'

const DesktopNavigation = ({
	internalLinksData,
	employeesData,
	className,
	contactButtonClassName,
	localizations,
	color,
}: {
	internalLinksData: Navigation[]
	employeesData: { data: EmployeeData[] }
	className: string
	contactButtonClassName: string
	localizations: Localizations | undefined
	color: string | undefined
}) => (
	<div className={`${styles.navigationWrapper} ${className}`}>
		<Link href="/">
			{color === 'beige' || color === 'blue-gray' || color === 'white' ? (
				<Image
					src="/images/logo-gray.svg"
					alt="logo"
					width={172}
					height={68}
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
		<ul className={styles.navigationWrapper}>
			{internalLinksData.map((item) => {
				if (item.path === 'contact') {
					return (
						<div key={item.id} className={styles.navigationMainLinkWrapper}>
							<SwitchCTA
								ctaData={{
									title: item.title,
									link: `/${item?.path}` ?? '',
									externalLink: false,
									buttonType: 'Button tertiary',
								}}
								className={contactButtonClassName}
								color={getColorHeader(color ?? '')}
							/>
						</div>
					)
				}

				if (item.path === 'social-media') return ''

				if (item.path === 'team') {
					return (
						<EmployeeSwitch
							parent={item}
							employeeData={employeesData}
							key={getUniqueId()}
							className={null}
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

export default DesktopNavigation

import React from 'react'
import { Navigation as NavigationData } from '@models/navigation.model'
import { Localizations } from '@models/attributes.model'
import { getColor } from '@constants/color'
import EmployeeData from '@models/employee.model'
import DesktopNavigation from './DesktopNavigation/DesktopNavigation'
import MobileNavigation from './MobileNavigation/MobileNavigation'
import styles from './navigation.module.scss'

const Navigation = ({
	internalLinksData,
	localizations,
	employeesData,
	color,
}: {
	internalLinksData: NavigationData[]
	localizations: Localizations | undefined
	employeesData: { data: EmployeeData[] }
	color: string | undefined
}) => (
	<nav className={`${styles.navigation} ${styles[getColor(color ?? '')]}`}>
		<MobileNavigation
			className={styles.navigationMobile}
			contactButtonClassName={styles.contactButtonNavigation}
			contactIconsClassName={styles.contactIconsNavigation}
			internalLinksData={internalLinksData}
			localizations={localizations}
			color={color}
			employeesData={employeesData}
		/>
		<DesktopNavigation
			className={styles.navigationDesktop}
			contactButtonClassName={styles.contactButtonNavigation}
			internalLinksData={internalLinksData}
			localizations={localizations}
			color={color}
			employeesData={employeesData}
		/>
	</nav>
)

export default Navigation

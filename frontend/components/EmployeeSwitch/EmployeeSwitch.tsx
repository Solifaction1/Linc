/* eslint-disable max-lines */
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Icon } from '@templates/switch-icon.config'
import SwitchIcon from '@templates/SwitchIcon'
import { Navigation as NavigationModel } from '@models/navigation.model'

import EmployeeData from '@models/employee.model'
import { getUniqueId } from '@utils/utils.service'
import Link from '@components/Link/Link'
import { BREAKPOINTS } from '@constants/breakpoints'
import styles from './EmployeeSwitch.module.scss'

const EmployeeSwitch = ({
	parent,
	employeeData,
	className,
}: {
	parent: NavigationModel
	employeeData: { data: EmployeeData[] }
	className: string | null
}) => {
	const [open, setOpen] = useState(false)

	const [firstEmployeesList, setFirstEmployeesList] = useState<EmployeeData[]>(
		[]
	)
	const [secondEmployeesList, setSecondEmployeesList] = useState<
		EmployeeData[]
	>([])
	const [thirdEmployeesList, setThirdEmployeesList] = useState<EmployeeData[]>(
		[]
	)
	const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.lg })

	const urlWrapper = useRef<HTMLDivElement>(null)

	const getLinks = (employeeList: EmployeeData[]) =>
		employeeList.map((item) => (
			<div key={getUniqueId()} className={styles.urlListWrapper}>
				<Link
					href={`/employee/${item.attributes.slug}`}
					key={getUniqueId()}
					linkType="cta"
					className={styles.url}
				>
					{item.attributes.firstName} {item.attributes.name}
					<SwitchIcon icon={Icon.ANGLE_RIGHT} />
				</Link>
			</div>
		))

	useEffect(() => {
		if (!isMobile) {
			const divide = employeeData.data.length / 3
			const hasDecimals = divide % 1 !== 0
			const employeesListLength = Math.ceil(divide)

			if (firstEmployeesList.length === 0) {
				setFirstEmployeesList(employeeData.data.slice(0, employeesListLength))
			}

			if (secondEmployeesList.length === 0 && employeeData.data.length > 1) {
				if (employeeData.data.length === 2 || employeeData.data.length === 3) {
					setSecondEmployeesList([employeeData.data[1]])
				} else if (hasDecimals) {
					if (divide.toString().split('.')[1].startsWith('333')) {
						setSecondEmployeesList(
							employeeData.data.slice(
								employeesListLength,
								employeesListLength + employeesListLength - 1
							)
						)
					} else {
						setSecondEmployeesList(
							employeeData.data.slice(
								employeesListLength,
								employeesListLength + employeesListLength
							)
						)
					}
				} else {
					setSecondEmployeesList(
						employeeData.data.slice(
							employeesListLength,
							employeesListLength + employeesListLength
						)
					)
				}
			}

			const employeeDataLength = employeeData.data.length

			let thirdEmployeesListLength
			if (employeeDataLength === 4) {
				thirdEmployeesListLength = 1
			} else if (((employeeDataLength - 7) / 3) % 1 === 0) {
				thirdEmployeesListLength =
					employeeDataLength - employeesListLength - employeesListLength + 1
			} else {
				thirdEmployeesListLength =
					employeeDataLength - employeesListLength - employeesListLength
			}

			if (thirdEmployeesList.length === 0 && employeeData.data.length > 2) {
				setThirdEmployeesList(
					employeeData.data.slice(-thirdEmployeesListLength)
				)
			}
		}
	}, [
		employeeData.data,
		firstEmployeesList,
		isMobile,
		secondEmployeesList,
		thirdEmployeesList,
	])

	return (
		<>
			<div
				className={`${styles.employeeSwitch} ${className || ''}`}
				key={getUniqueId()}
			>
				<button
					className={`${styles.employeeLink} ${styles.activeLang}`}
					type="button"
					onClick={() => setOpen((prevstate) => !prevstate)}
				>
					{parent.title}
					<SwitchIcon
						className={`${open && styles.active} ${styles.arrow}`}
						icon={Icon.ANGLE_DOWN}
					/>
				</button>
			</div>
			<div
				className={styles.dropDown}
				style={{
					height: open ? urlWrapper.current?.clientHeight : 0,
				}}
			>
				<div className={styles.urlWrapper} ref={urlWrapper}>
					{!isMobile ? (
						<>
							<div className={styles.urlList}>
								{getLinks(firstEmployeesList)}
							</div>

							<div className={styles.urlList}>
								{getLinks(secondEmployeesList)}
							</div>
							<div className={styles.urlList}>
								{getLinks(thirdEmployeesList)}
							</div>
						</>
					) : (
						<div className={styles.urlList}>{getLinks(employeeData.data)}</div>
					)}
				</div>
			</div>
		</>
	)
}

export default EmployeeSwitch

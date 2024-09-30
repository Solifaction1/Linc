import React from 'react'
import RechtsdomeinenSideBarData from '@models/rechtsdomeinenSidebar.model'
import SwitchCTA from '@templates/SwitchCTA'
import styles from './rechtsdomeinen-sidebar.module.scss'

const RechtsdomeinenSidebar: React.FC<RechtsdomeinenSideBarData> = (
	props: RechtsdomeinenSideBarData
) => (
	<section className={styles.rechtsdomeinenSidebar}>
		<h4 className={styles.title}>{props.title}</h4>

		<div className={styles.employeeData}>
			{props.employees.data.map((employee) => (
				<div className={styles.employee} key={employee.id}>
					{employee.attributes.firstName && employee.attributes.name && (
						<p
							className={styles.name}
						>{`${employee.attributes.firstName} ${employee.attributes.name}`}</p>
					)}
					{employee.attributes.telephone && (
						<p
							className={styles.telephone}
						>{`Tel.: ${employee.attributes.telephone}`}</p>
					)}
				</div>
			))}
		</div>

		<SwitchCTA ctaData={props.firstCta} />

		<p className={styles.description}>{props.description}</p>

		<SwitchCTA ctaData={props.secondCta} />
	</section>
)

export default RechtsdomeinenSidebar

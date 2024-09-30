import React from 'react'
import Footer from '@components/Footer/Footer'
import { EmployeeLayoutProps } from '@components/Layout/layout.config'
import { HeaderData } from '@models/attributes.model'
import Navigation from '@components/Navigation/Navigation'
import EmployeeHeader from '../Header/Header'

const EmployeeLayout: React.FC<EmployeeLayoutProps> = (
	props: EmployeeLayoutProps
) => {
	const headerData = props.data?.attributes?.header

	return (
		<>
			{props.navigation && (
				<Navigation
					internalLinksData={props.navigation?.resultNavigation}
					localizations={props.data?.attributes?.localizations}
					employeesData={props.navigation?.resultEmployees}
					color={props.data?.attributes.color}
				/>
			)}
			<div>
				{headerData && props.data && (
					<EmployeeHeader
						{...(headerData as HeaderData)}
						color={props.data?.attributes.color}
						firstName={props.data?.attributes.firstName}
						name={props.data?.attributes.name}
						rechtsdomeinen={props.data?.attributes.rechtsdomeinen}
						telephone={props.data?.attributes.telephone}
					/>
				)}
				{props.children}
			</div>
			{props.navigation?.resultNavigation && (
				<Footer
					internalLinksData={props.navigation?.resultFooter}
					localizations={props.data?.attributes?.localizations}
				/>
			)}
		</>
	)
}

export default EmployeeLayout

import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import { LayoutProps } from '@components/Layout/layout.config'
import { HeaderData } from '@models/attributes.model'
import Navigation from '@components/Navigation/Navigation'

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
	const headerData = props.data?.attributes?.header

	return (
		<>
			{props.navigation && (
				<Navigation
					internalLinksData={props.navigation?.resultNavigation}
					employeesData={props.navigation?.resultEmployees}
					localizations={props.data?.attributes?.localizations}
					color={props.data?.attributes.color}
				/>
			)}
			<div>
				{headerData && (
					<Header
						{...(headerData as HeaderData)}
						color={props.data?.attributes.color}
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

export default Layout

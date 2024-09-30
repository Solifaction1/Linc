import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type AppContextInterface = {
	lng: string
}

type PageContextProviderInterface = {
	pageContext: any
	children: React.ReactNode
}

const PageContext = React.createContext<AppContextInterface | null>({
	lng: 'en',
})

export const PageContextProvider: React.FC<PageContextProviderInterface> = ({
	pageContext,
	children,
}: PageContextProviderInterface) => {
	const { i18n } = useTranslation()
	useEffect(() => {
		i18n.changeLanguage(pageContext.lng)
	}, [])

	return (
		<PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
	)
}

export const usePageContext = () => React.useContext(PageContext)

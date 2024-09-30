import App from 'next/app'
import React, { createContext, useEffect, useState } from 'react'
import { appWithTranslation } from 'next-i18next'
import '../styles/reset.css'
import '../styles/globals.css'
import styles from './_app.module.scss'
// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }: any) => {
	const { home } = pageProps

	return (
		<GlobalContext.Provider value={home?.attributes}>
			<div className={styles.root}>
				<Component {...pageProps} />
			</div>
		</GlobalContext.Provider>
	)
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx)
	// Fetch global site settings from Strapi
	// Pass the data to our page via props
	return { ...appProps }
}

export default appWithTranslation(MyApp)

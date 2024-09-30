/* eslint-disable max-lines */
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { singlePageConfig } from '@models/page.model'
import SwitchComponent from '@templates/SwitchComponent'
import { fetchCollectionApi, fetchNavigation } from '@services/api.service'
import { interval } from '@constants/revalidate'
import Layout from '@components/Layout/Layout'

const HomeView: React.FC<singlePageConfig> = (props: singlePageConfig) => (
	<Layout data={props.page.data} navigation={props.navigation}>
		<SwitchComponent
			seo={props.page.data.attributes.seo}
			components={props.page.data.attributes.body}
			kantoorCollection={props.kantoren}
			rechtsDomeinen={props.rechtsdomeinen}
			locale={props.locale}
		/>
	</Layout>
)

export async function getStaticProps({ locale }: { locale: string }) {
	try {
		const page = await fetchCollectionApi('home-page', locale, {
			populate: true,
			level: 4,
		})

		if (!page.data) {
			return { notFound: true, revalidate: interval }
		}

		const navigation = await fetchNavigation(locale)

		const rechtsdomeinen = await fetchCollectionApi('rechtsdomeinen', locale, {
			populate: true,
			sort: 'title',
			filter: '[showInComponent][$eq]=1',
			level: 1,
		})

		const kantoren = await fetchCollectionApi('kantoren', locale, {
			populate: true,
			level: 1,
		})

		return {
			props: {
				...(await serverSideTranslations(locale, ['common'])),
				page,
				navigation,
				rechtsdomeinen,
				kantoren,
				locale,
			},
			revalidate: interval,
		}
	} catch (err: unknown) {
		return { notFound: true, revalidate: interval }
	}
}

export default HomeView

import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@components/Layout/Layout'
import { fetchCollectionApi, fetchNavigation } from '@services/api.service'
import { singlePageConfig } from '@models/page.model'
import SwitchComponent from '@templates/SwitchComponent'
import { interval } from '@constants/revalidate'

const ContactView: React.FC<singlePageConfig> = ({
	page,
	navigation,
	kantoren,
	locale,
}) => (
	<Layout data={page.data} navigation={navigation}>
		<SwitchComponent
			seo={page.data.attributes.seo}
			components={page.data.attributes.component}
			kantoorCollection={kantoren}
			locale={locale}
		/>
	</Layout>
)

export default ContactView

export async function getStaticProps({ locale }: { locale: string }) {
	try {
		const page = await fetchCollectionApi('contact', locale, {
			populate: true,
			level: 4,
		})

		if (!page.data) {
			return { notFound: true, revalidate: interval }
		}

		const kantoren = await fetchCollectionApi('kantoren', locale, {
			populate: true,
			level: 1,
		})

		const navigation = await fetchNavigation(locale)

		return {
			props: {
				...(await serverSideTranslations(locale, ['common'])),
				page,
				navigation,
				kantoren,
				locale,
			},
			revalidate: interval,
		}
	} catch (err: unknown) {
		return { notFound: true, revalidate: interval }
	}
}

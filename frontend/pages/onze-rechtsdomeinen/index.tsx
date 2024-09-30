import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@components/Layout/Layout'
import { fetchCollectionApi, fetchNavigation } from '@services/api.service'
import { singlePageConfig } from '@models/page.model'
import SwitchComponent from '@templates/SwitchComponent'
import { interval } from '@constants/revalidate'
import Accordion from '@components/Accordion/Accordion'
import RechtsdomeinenAccordionItem from '@components/RechtsdomeinenAccordionItem/RechtsdomeinenAccordionItem'

const OnzeRechtsdomeinenView: React.FC<singlePageConfig> = ({
	page,
	navigation,
	rechtsdomeinen,
	locale,
}) => (
	<Layout data={page.data} navigation={navigation}>
		{rechtsdomeinen.data.map((rechtsDomein) => (
			<Accordion
				accordion={[
					{
						title: rechtsDomein.attributes.title ?? '',
					},
				]}
				key={rechtsDomein.id}
				componentId={rechtsDomein.id.toString()}
			>
				<RechtsdomeinenAccordionItem
					description={rechtsDomein.attributes.description}
					image={rechtsDomein.attributes.image}
					rechtsdomeinenSideBarData={
						rechtsDomein.attributes.rechtsdomeinenSidebar
					}
				/>
			</Accordion>
		))}
		<SwitchComponent
			seo={page.data.attributes.seo}
			components={page.data.attributes.component}
			locale={locale}
		/>
	</Layout>
)

export default OnzeRechtsdomeinenView

export async function getStaticProps({ locale }: { locale: string }) {
	try {
		const page = await fetchCollectionApi('onze-rechtsdomeinen', locale, {
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
			level: 3,
		})

		return {
			props: {
				...(await serverSideTranslations(locale, ['common'])),
				page,
				navigation,
				rechtsdomeinen,
				locale,
			},
			revalidate: interval,
		}
	} catch (err: unknown) {
		return { notFound: true, revalidate: interval }
	}
}

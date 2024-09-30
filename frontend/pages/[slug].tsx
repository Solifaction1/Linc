import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PreviewBanner from '@components/PreviewBanner/PreviewBanner'
import Layout from '@components/Layout/Layout'
import {
	fetchCollectionApi,
	fetchContentApi,
	fetchContentPreviewApi,
	fetchNavigation,
} from '@services/api.service'
import Page, { pageConfig, contentConfig } from '@models/page.model'
import SwitchComponent from '@templates/SwitchComponent'
import { interval } from '@constants/revalidate'

const View: React.FC<pageConfig> = ({
	page,
	preview,
	navigation,
	rechtsdomeinen,
	kantoren,
	locale,
}) => (
	<Layout data={page.data[0]} navigation={navigation}>
		{preview && <PreviewBanner />}
		{page.data[0] && (
			<SwitchComponent
				seo={page.data[0].attributes.seo}
				components={page.data[0]?.attributes.component}
				rechtsDomeinen={rechtsdomeinen}
				kantoorCollection={kantoren}
				locale={locale}
			/>
		)}
	</Layout>
)

export default View

export async function getStaticPaths(context: contentConfig) {
	const page = await fetchCollectionApi('pages', context.defaultLocale, {
		populate: true,
		level: 1,
	})
	const paths = page.data.map((pageData: Page) => ({
		params: { slug: pageData.attributes.slug },
	}))

	return {
		paths,
		fallback: 'blocking',
	}
}

export async function getStaticProps(context: contentConfig) {
	const { slug } = context.params
	const preview = context.preview ? true : null
	const { locale } = context
	if (!slug) {
		throw new Error('Slug not valid')
	}

	let page
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

	if (preview) {
		page = await fetchContentPreviewApi(slug, 'pages', 4, locale)
	} else {
		page = await fetchContentApi(slug, 'pages', locale, 4)
	}
	if (!page) {
		return { notFound: true, revalidate: interval }
	}

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			page,
			preview,
			navigation,
			rechtsdomeinen,
			kantoren,
			locale,
		},
		revalidate: interval,
	}
}

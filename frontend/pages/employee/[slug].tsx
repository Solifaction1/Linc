import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PreviewBanner from '@components/PreviewBanner/PreviewBanner'
import {
	fetchCollectionApi,
	fetchContentApi,
	fetchContentPreviewApi,
	fetchNavigation,
} from '@services/api.service'
import Page, { pageConfig, contentConfig } from '@models/page.model'
import SwitchComponent from '@templates/SwitchComponent'
import { interval } from '@constants/revalidate'
import EmployeeLayout from '@components/Employee/Layout/Layout'
import Custom404 from '../404'

const EmployeeView: React.FC<pageConfig> = ({
	employeePage,
	preview,
	navigation,
	locale,
}) => {
	if (employeePage.data[0]) {
		return (
			<EmployeeLayout data={employeePage.data[0]} navigation={navigation}>
				{preview && <PreviewBanner />}
				<SwitchComponent
					seo={employeePage.data[0].attributes.seo}
					components={employeePage.data[0]?.attributes.component}
					locale={locale}
				/>
			</EmployeeLayout>
		)
	}

	return <Custom404 />
}

export default EmployeeView

export async function getStaticPaths(context: contentConfig) {
	const page = await fetchCollectionApi('employees', context.defaultLocale, {
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

	let employeePage

	const navigation = await fetchNavigation(locale)

	if (preview) {
		employeePage = await fetchContentPreviewApi(slug, 'employees', 4, locale)
	} else {
		employeePage = await fetchContentApi(slug, 'employees', locale, 4)
	}
	if (!employeePage) {
		return { notFound: true, revalidate: interval }
	}

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			employeePage,
			preview,
			navigation,
			locale,
		},
		revalidate: interval,
	}
}

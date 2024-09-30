/* eslint-disable max-lines */
import axios from 'axios'
import { FormSubmission } from '@models/customForm.model'

// Helper function to GET the entire Collection from Strapi
const fetchCollectionApi = async (
	path: string,
	locale: string,
	optionalParams?: {
		filter?: string
		populate?: boolean
		sort?: string,
		level: number
	}
) => {
	const requestUrl = `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL
	}/api/${path}?locale=${locale}${
		optionalParams?.populate ? '&populate=deep' : ''
	}${
		optionalParams?.level
			? `,${optionalParams?.level}`
			: ''
	}${optionalParams?.filter ? `&filters${optionalParams.filter}` : ''}${
		optionalParams?.sort ? `&sort[0]=${optionalParams.sort}` : ''
	}`
	
	try {
		const response = await axios.get(requestUrl)
		return response.data
	} catch (error) {
		console.error(error)
	}

	return {
		status: 500
	}
}

// Helper function to GET a single Content item from Strapi
const fetchContentApi = async (slug: string, path: string, locale: string, level: number) => {
	const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${path}/?filters[slug][$eq]=${slug}&locale=${locale}&populate=deep${
		level
			? `,${level}`
			: ''
	}`
	const response = await axios.get(requestUrl)
	return response.data
}

// Helper function to GET a single Content item from Strapi
const fetchSingleContentApi = async (path: string, locale: string) => {
	const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${path}/?locale=${locale}&populate=deep`
	
	try {
		const response = await axios.get(requestUrl)
		return response.data
	} catch (error) {
		console.error(error)
	}

	return {
		status: 500
	}
}

// Helper function to GET a single Content item from Strapi which is in draft state
const fetchContentPreviewApi = async (
	slug: string | string[],
	path: string,
	level: number,
	locale?: string
) => {
	const requestUrl = `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL
	}/api/${path}?publicationState=preview${
		level
			? `,${level}`
			: ''
	}&filters[slug][$eq]=${slug}&locale=${
		locale ?? 'en'
	}&populate=deep`

	try {
		const response = await axios.get(requestUrl)
		return response.data
	} catch (error) {
		console.error(error)
	}

	return {
		status: 500
	}
}

// Helper function to GET the languages from strapi
const fetchLanguagesApi = async () => {
	const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/i18n/locales`
	
	try {
		const response = await axios.get(requestUrl)
		return response.data
	} catch (error) {
		console.error(error)
	}

	return {
		status: 500
	}
}

const fetchNavigation = async (locale?: string) => {
	try {
		const resultNavigation = await fetchCollectionApi(
			'navigation/render/navigation',
			locale || '',
			{ populate: true, level: 1 }
		)

		const resultFooter = await fetchCollectionApi(
			'navigation/render/footer',
			locale || '',
			{ populate: true , level: 1}
		)

		const resultEmployees = await fetchCollectionApi('employees', locale || '', {
			populate: true,
			filter: '[showInNavigation][$eq]=1',
			sort: 'name:asc&sort[1]=firstName:asc',
			level: 1
		})

		return { resultNavigation, resultFooter, resultEmployees }
	} catch (error) {
		console.error(error)
	}

	return {
		status: 500
	}
}

const addFormApi = (formData: FormSubmission) => {
	try {
		const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/form-submissions`
		return axios.post(requestUrl, { data: formData })
	} catch (e) {
		console.error(e)
	}

	return {
		status: 500
	}
}

const postMailData = async (
	mailData: {
		[x: number]: any
	}[]
) => {
	const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/mailing`

	try {
		const response = await axios.post(requestUrl, mailData)
		return response
	} catch (error) {
		console.error(error)
	}

	return {
		status: 500
	}
}

export {
	fetchCollectionApi,
	fetchContentApi,
	fetchSingleContentApi,
	fetchContentPreviewApi,
	fetchLanguagesApi,
	fetchNavigation,
	addFormApi,
	postMailData,
}

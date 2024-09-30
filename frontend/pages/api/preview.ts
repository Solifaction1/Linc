import { NextApiResponse, NextApiRequest } from 'next'
import { fetchContentPreviewApi } from '@services/api.service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// Get the preview secret and the slug which needs to be previewed
	const { secret, slug } = req.query
	// If the secret passed as URL query parameter doesn't match the preview secret in .env
	// then send a 401-Unauthorized response
	if (secret !== process.env.STRAPI_PREVIEW_SECRET) {
		return res.status(401).json({ message: 'Invalid token' })
	}

	// If slug is not provided, send a 400-Bad Request response
	if (!slug) {
		return res.status(400).json({ message: 'Parameter `slug` is not provided' })
	}

	// Send a request to Strapi and fetch the article
	// to check if the provided slug exists
	const blog = await fetchContentPreviewApi(slug, 'blogs', 1)

	// If the article is not found, send a 404-Not Found response
	if (blog === null) {
		return res.status(404).json({ message: 'Blog not found' })
	}

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({})

	// Redirect to the path of the article slug
	return res.redirect(307, `/blogs/${blog.data[0].attributes.slug}`)
}

export default handler

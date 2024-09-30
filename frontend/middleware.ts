import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
	const urlSubstr = ['fonts', '_next', 'vk.com', 'favicon']

	let shouldReturn: boolean | undefined
	urlSubstr.forEach((substr) => {
		if (req.url.includes(substr)) shouldReturn = true
	})

	if (shouldReturn) {
		return NextResponse.next()
	}

	const apiRes = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/redirect?populate=deep`
		)
	).json()

	const redirects = apiRes?.data?.attributes?.Redirect
	let redirectUrl
	await redirects?.forEach((path) => {
		if (req.nextUrl.pathname.startsWith(path.oldPath)) {
			redirectUrl = new URL(path.newPath, req.url)
		}
	})

	if (redirectUrl) return NextResponse.redirect(redirectUrl)

	return NextResponse.next()
}

import React from 'react'
import Script from 'next/script'
import sanitizeHtml from 'sanitize-html'
import Head from 'next/head'
import { SEO } from '@models/attributes.model'
import { NAME_WEBSITE } from '@constants/names'

const SEO = ({ seo }: { seo: SEO | null }) => {
	return (
		<div>
			<Head>
				<title>{seo?.metaTitle || NAME_WEBSITE}</title>
				<meta name="description" content={seo?.metaDescription} />
				{seo?.keywords && <meta name="keywords" content={seo.keywords} />}
				<meta property="og:url" content={process.env.BASE_URL} />
				<meta
					name="viewport"
					content={seo?.metaViewport || 'width=device-width, initial-scale=1.0'}
				/>
				<meta property="og:site_name" content={NAME_WEBSITE} />
				{seo?.metaRobots && <meta name="robots" content={seo.metaRobots} />}
				{seo?.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}
				<meta
					property="og:image"
					content={seo?.metaImage?.data?.attributes.url}
				/>
				{seo?.structuredData && (
					<script
						key="structured-data"
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: sanitizeHtml(JSON.stringify(seo.structuredData)),
						}}
					/>
				)}
				{seo?.metaSocial?.map((social) => {
					switch (social?.socialNetwork) {
						case 'Facebook':
							return (
								<React.Fragment key={social?.socialNetwork}>
									<meta property="og:title" content={social?.title} />
									<meta
										property="og:description"
										content={social?.description}
									/>
									<meta
										property="og:image"
										content={social?.image.data?.attributes?.url}
									/>
								</React.Fragment>
							)
						case 'Twitter':
							return (
								<React.Fragment key={social?.socialNetwork}>
									<meta
										name="twitter:card"
										content={social?.image?.data?.attributes?.url}
									/>
									<meta name="twitter:site" content={NAME_WEBSITE} />
									<meta name="twitter:title" content={social?.title} />
									<meta
										name="twitter:description"
										content={social?.description}
									/>
									<meta
										name="twitter:image"
										content={social?.image?.data?.attributes?.url}
									/>
								</React.Fragment>
							)
						default:
							return null
					}
				})}
			</Head>
			<Script
				src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
				type="text/javascript"
				charSet="UTF-8"
				data-domain-script="a0ee26e0-0a81-4c9b-b1d0-180256e8acba"
			/>
			<Script id="cookie-script" type="text/javascript">
				{`
				function OptanonWrapper() {}
				`}
			</Script>
		</div>
	)
}

export default SEO

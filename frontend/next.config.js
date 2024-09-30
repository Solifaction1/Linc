/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const websiteUrls = 'frontend-dot-linc-production.ew.r.appspot.com backend-dot-linc-production.ew.r.appspot.com linc.legal www.linc.legal next-strapi-base-project-website.s3.eu-central-1.amazonaws.com fonts.googleapis.com fonts.gstatic.com strapi-demo-tvc.s3.eu-central-1.amazonaws.com localhost:* 127.0.0.1:* *.cookie-cdn.cookiepro.com cookie-cdn.cookiepro.com fonts.cdnfonts.com geolocation.onetrust.com'

const contentSecurityPolicy = `
  default-src 'self' ${websiteUrls}; 
  script-src 'self' 'unsafe-eval' ${websiteUrls}; 
  img-src data: ${websiteUrls};
  font-src 'self' ${websiteUrls};  
  style-src 'self' 'unsafe-inline' ${websiteUrls};
`

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

const nextConfig = {
  distDir: 'build',
  i18n,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    STRAPI_PREVIEW_SECRET: process.env.STRAPI_PREVIEW_SECRET,
    IP_API_URL: process.env.IP_API_URL,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: process.env.AWS_CDN_URL,
      },
      // {
      //   hostname: process.env.AWS_CDN_STAGING_URL,
      // },
    ],
    minimumCacheTTL: 31536000
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders
      },
    ]
  },
}

module.exports = nextConfig
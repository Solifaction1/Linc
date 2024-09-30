module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: ['*'],
      origin: ['*']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            "cdn.jsdelivr.net",
            "strapi.io",
            "s3.amazonaws.com",
            "editor.unlayer.com",
            process.env.CDN_URL,
          ],
          "script-src": ["'self'", "editor.unlayer.com"],
          "frame-src": ["'self'", "editor.unlayer.com"],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            process.env.CDN_URL,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

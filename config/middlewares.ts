export default ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "blob:",
            "'self'",
            "data:",
            "cdn.jsdelivr.net",
            "strapi.io",
            env('AWS_ENDPOINT'),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            env('AWS_ENDPOINT'),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

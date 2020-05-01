const config = require('@livip/config').default;

const serverRuntimeConfig = {};

const publicRuntimeConfig = {
  variant: config.variants.travel,
};

const nextConfig = {
  serverRuntimeConfig,
  publicRuntimeConfig,
  env: {
    MAILCHIMP_API_URL: 'https://us8.api.mailchimp.com/3.0',
    MAILCHIMP_AUDIENCE_ID: 'ad3dec117e',
    MAILCHIMP_API_KEY: 'a7f29b03ab81bcc46d736b7ec0bae7c3-us8',
  },
};

module.exports = nextConfig;

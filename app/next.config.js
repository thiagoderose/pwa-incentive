const config = require('@livipdev/config').default;

const serverRuntimeConfig = {};

const publicRuntimeConfig = {
  variant: config.variants.travel,
};

const nextConfig = {
  serverRuntimeConfig,
  publicRuntimeConfig,
  env: {
    MAILCHIMP_API_URL: '',
    MAILCHIMP_AUDIENCE_ID: '',
    MAILCHIMP_API_KEY: '',
    GOOGLE_API_KEY: '',
  },

  webpack(webpackConfig) {
    webpackConfig.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return webpackConfig;
  },
};

module.exports = nextConfig;

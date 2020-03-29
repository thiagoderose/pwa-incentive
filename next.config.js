const config = require('@livip/config').default;

const serverRuntimeConfig = {};

const publicRuntimeConfig = {
  variant: config.variants.travel,
};

const nextConfig = {
  serverRuntimeConfig,
  publicRuntimeConfig,
};

module.exports = nextConfig;

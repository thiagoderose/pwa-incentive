import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const defaultProps = {
  variant: `${publicRuntimeConfig.variant}-home-highlight`,
};

export default defaultProps;

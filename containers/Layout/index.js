import React from 'react';
import getConfig from 'next/config';
import Container from '@livip/core/Container';
import Header from '@livip/containers/Header';

import propTypes from './propTypes';

const Layout = ({ children, ...props }) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      {...props}
    >
      <Header variant={publicRuntimeConfig.variant} />
      {children}
    </Container>
  );
};

Layout.propTypes = propTypes;

export default Layout;

import React from 'react';
import Container from '@livip/core/Container';
import Header from '@livip/containers/Header';

import Footer from '../Footer';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Layout = ({ children, variant, ...props }) => (
  <Container
    disableGutters
    maxWidth={false}
    {...props}
  >
    <Header variant={variant} />
    {children}
    <Footer />
  </Container>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;

import App from 'next/app';
import React from 'react';
import { ThemeProvider, theme } from '@livip/core/styles';

export default class TravelApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };
};

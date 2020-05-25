import React from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';

import messages from './messages';

const Projects = () => {
  const intl = useIntl();

  return (
    <Head>
      <title>{ intl.formatMessage(messages.title) }</title>

      <meta name="description" content={intl.formatMessage(messages.description)} />
      <meta name="keywords" content={intl.formatMessage(messages.keywords)} />
    </Head>
  );
};

export default Projects;

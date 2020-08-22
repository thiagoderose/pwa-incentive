import React, { Fragment } from 'react';
import { useRouter } from 'next/router'

import EventContainer from '../../containers/Event';
import Head from '../../components/Heads/Event';

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Fragment>
      <Head />
      <EventContainer id={id} />
    </Fragment>
  );
};

export default Event;

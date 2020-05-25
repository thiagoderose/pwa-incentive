import React from 'react';

import Box from '@livipdev/core/Box';
import Hidden from '@livipdev/core/Hidden';

import event from './mockedAPI.json';
import Layout from '../Layout';
import EventHighlight from '../../components/EventHighlight';
import NextEvents from '../NextEvents';
import HighlightedEvents from '../HighlightedEvents';
import Newsletter from '../Newsletter';
import Testimonials from '../Testimonials';
import LastProjects from '../LastProjects';
import Partners from '../../components/Partners';
import ServicesIncluded from '../../components/ServicesIncluded';


const Event = () => (
  <Layout>
    <EventHighlight
      title={event.name}
      description={event.short_description}
      background={event.cover_url}
    />
    <NextEvents />
    <HighlightedEvents />
    <Newsletter />
    <Box py={7}>
      <Testimonials />
      <Partners />
    </Box>
    <Hidden smDown implementation="css">
      <LastProjects />
    </Hidden>
    <Box pt={7}>
      <ServicesIncluded />
    </Box>
  </Layout>
);

export default Event;

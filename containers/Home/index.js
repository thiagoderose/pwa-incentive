import React from 'react';

import Box from '@livipdev/core/Box';
import Hidden from '@livipdev/core/Hidden';

import Layout from '../Layout';
import Highlight from '../../components/Highlight';
import NextEvents from '../NextEvents';
import HighlightedEvents from '../HighlightedEvents';
import Newsletter from '../Newsletter';
import Testimonials from '../Testimonials';
import LastProjects from '../LastProjects';
import Partners from '../../components/Partners';
import ServicesIncluded from '../../components/ServicesIncluded';

const Home = () => (
  <Layout>
    <Highlight />
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

export default Home;

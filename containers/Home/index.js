import React from 'react';

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
    <Testimonials />
    <Partners />
    <Hidden smDown implementation="css">
      <LastProjects />
    </Hidden>
    <ServicesIncluded />
  </Layout>
);

export default Home;

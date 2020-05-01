import React from 'react';

import Layout from '../Layout';
import Highlight from '../../components/Highlight';
import NextEvents from '../NextEvents';
import HighlightedEvents from '../HighlightedEvents';
import Newsletter from '../Newsletter';
import Testimonials from '../Testimonials';

const Home = () => (
  <Layout>
    <Highlight />
    <NextEvents />
    <HighlightedEvents />
    <Newsletter />
    <Testimonials />
  </Layout>
);

export default Home;

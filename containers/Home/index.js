import React from 'react';

import Layout from '../Layout';
import Highlight from '../Highlight';
import NextEvents from '../NextEvents';
import HighlightedEvents from '../HighlightedEvents';

const Home = () => (
  <Layout>
    <Highlight />
    <NextEvents />
    <HighlightedEvents />
  </Layout>
);

export default Home;

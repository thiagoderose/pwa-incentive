import React from 'react';

import Layout from '../Layout';
import Highlight from '../Highlight';
import NextEvents from '../NextEvents';
import HomeCarousel from '../HomeCarousel';

const Home = () => (
  <Layout>
    <Highlight />
    <NextEvents />
    <HomeCarousel />
  </Layout>
);

export default Home;

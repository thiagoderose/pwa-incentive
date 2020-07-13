import React from 'react';

import Box from '@livipdev/core/Box';

import BudgetDialog from '../../components/BudgetDialog';
import Layout from '../Layout';
import Highlight from '../../components/Highlight';
import HighlightedEvents from '../HighlightedEvents';
import Newsletter from '../Newsletter';
import Testimonials from '../Testimonials';
import Partners from '../../components/Partners';
import ServicesIncluded from '../../components/ServicesIncluded';
import NextEvents from '../NextEvents';

const Home = () => (
  <Layout>
    <BudgetDialog
      open
      title={{ id: 'potato', defaultMessage: 'Testing' }}
      subtitle={{ id: 'potato', defaultMessage: 'Testing 2' }}
      onClose={() => alert('closed')}
      maxWidth="lg"
      fullWidth
    />
    <Highlight />
    <NextEvents />
    <Box mb={7}>
      <Newsletter />
    </Box>
    <HighlightedEvents />
    <Box pt={7}>
      <ServicesIncluded />
    </Box>
    <Box py={7}>
      <Testimonials />
      <Partners />
    </Box>
  </Layout>
);

export default Home;

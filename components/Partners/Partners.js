import React from 'react';

import Box from '@livip/core/Box';
import Container from '@livip/core/Container';
import Grid from '@livip/core/Grid';

const Partners = () => (
  <Container>
    <Grid container justify="space-around">
      <Box component={Grid} item xs={12} sm={6} md={2} textAlign="center">
        <img src="/img/partners-intel.jpg" role="presentation" alt="Parceiro Intel" />
      </Box>
      <Box component={Grid} item xs={12} sm={6} md={3} textAlign="center">
        <img src="/img/partners-ourofino.jpg" role="presentation" alt="Parceiro Ourofino" />
      </Box>
      <Box component={Grid} item xs={12} sm={6} md={2} textAlign="center">
        <img src="/img/partners-sanofi.jpg" role="presentation" alt="Parceiro Sanofi" />
      </Box>
      <Box component={Grid} item xs={12} sm={6} md={3} textAlign="center">
        <img src="/img/partners-proauto.jpg" role="presentation" alt="Parceiro Proauto" />
      </Box>
      <Box component={Grid} item xs={12} sm={6} md={2} textAlign="center">
        <img src="/img/partners-hp.jpg" role="presentation" alt="Parceiro HP" />
      </Box>
    </Grid>
  </Container>
);

export default Partners;

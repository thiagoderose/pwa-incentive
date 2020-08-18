import React from 'react';

import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';
import Grid from '@livipdev/core/Grid';
import Carousel from '@livipdev/core/Carousel';

const Partners = () => {
  const gridProps = {
    component: Grid,
    item: true,
    xs: 12,
    sm: 6,
    md: 2,
    textAlign: 'center',
  };

  return (
    <Container>
      <Grid container justify="space-around">
        <Carousel
          autoPlay={4000}
          slidesPerPage={5}
          center
          infinite
        >
          <Box {...gridProps}>
            <img src="/img/partners-intel.jpg" role="presentation" alt="Parceiro Intel" />
          </Box>
          <Box {...gridProps} md={3}>
            <img src="/img/partners-ourofino.jpg" role="presentation" alt="Parceiro Ourofino" />
          </Box>
          <Box {...gridProps}>
            <img src="/img/partners-sanofi.jpg" role="presentation" alt="Parceiro Sanofi" />
          </Box>
          <Box {...gridProps} md={3}>
            <img src="/img/partners-proauto.jpg" role="presentation" alt="Parceiro Proauto" />
          </Box>
          <Box {...gridProps}>
            <img src="/img/partners-hp.jpg" role="presentation" alt="Parceiro HP" />
          </Box>
        </Carousel>
      </Grid>
    </Container>
  );
};

export default Partners;

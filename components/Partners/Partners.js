import React from 'react';

import Container from '@livip/core/Container';
import Grid from '@livip/core/Grid';

const Partners = () => (
  <Container>
    <Grid container justify="space-around">
      <Grid item>
        <img src="/img/partners-intel.jpg" role="presentation" alt="Parceiro Intel" />
      </Grid>
      <Grid item>
        <img src="/img/partners-ourofino.jpg" role="presentation" alt="Parceiro Ourofino" />
      </Grid>
      <Grid item>
        <img src="/img/partners-sanofi.jpg" role="presentation" alt="Parceiro Sanofi" />
      </Grid>
      <Grid item>
        <img src="/img/partners-proauto.jpg" role="presentation" alt="Parceiro Proauto" />
      </Grid>
      <Grid item>
        <img src="/img/partners-hp.jpg" role="presentation" alt="Parceiro HP" />
      </Grid>
    </Grid>
  </Container>
);

export default Partners;

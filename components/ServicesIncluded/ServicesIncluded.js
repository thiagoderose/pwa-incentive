import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livip/core/Box';
import Container from '@livip/core/Container';
import Title from '@livip/core/Title';
import Grid from '@livip/core/Grid';

import messages from './messages';
import Service from './Service';

const ServicesIncluded = ({ classes }) => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };

  return (
    <Box>
      <Container>
        <Title
          title={title}
          align="center"
        />
        <Grid container>
          <Service
            classes={classes}
            description={messages.welcomeDescription}
            icon="services-welcome"
            title={messages.welcomeTitle}
          />
          <Service
            classes={classes}
            description={messages.transportDescription}
            icon="services-transport"
            title={messages.transportTitle}
          />
          <Service
            classes={classes}
            description={messages.drinksDescription}
            icon="services-drinks"
            title={messages.drinksTitle}
          />
          <Service
            classes={classes}
            description={messages.chatDescription}
            icon="services-chat"
            title={messages.chatTitle}
          />
          <Service
            classes={classes}
            description={messages.gastroDescription}
            icon="services-gastro"
            title={messages.gastroTitle}
          />
          <Service
            classes={classes}
            description={messages.appDescription}
            icon="services-app"
            title={messages.appTitle}
          />
        </Grid>
      </Container>
    </Box>
  );
};

ServicesIncluded.propTypes = {
  classes: PropTypes.shape({
    image: PropTypes.string,
  }),
};

export default ServicesIncluded;

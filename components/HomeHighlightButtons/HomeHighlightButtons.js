import React from 'react';
import Container from '@livip/core/Container';
import Button from '@livip/core/Button';
import { SCREEN_SIZES } from '@livip/core/styles/theme/constants';

import propTypes from './propTypes';

const HomeHighlightButtons = ({ classes, events }) => (
  <Container
    classes={classes}
    maxWidth={SCREEN_SIZES.MEDIUM}
    disableGutters
  >
    {
      events.map((event) => (
        <Button variant="outlined" key={event.key}>
          {event.title}
        </Button>
      ))
    }
  </Container>
);

HomeHighlightButtons.propTypes = propTypes;

export default HomeHighlightButtons;

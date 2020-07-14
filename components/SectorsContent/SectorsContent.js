import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Carousel from '@livipdev/core/Carousel';
import Grid from '@livipdev/core/Grid';
import useTheme from '@livipdev/core/styles/useTheme';

import SectorsContentMiddlePanel from '../SectorsContentMiddlePanel';
import SectorsContentLeftPanel from '../SectorsContentLeftPanel';
import SectorsContentRightPanel from '../SectorsContentRightPanel';

const SectorsContent = ({ classes, features, gallery, logo, map, name, title, description }) => {
  const theme = useTheme();
  return (
    <Grid container>
      <SectorsContentLeftPanel>
        <Carousel responsive>
          {gallery.map((image) => (
            <img className={classes.image} src={image} alt="" role="presentation" />
          ))}
        </Carousel>
      </SectorsContentLeftPanel>
      <SectorsContentMiddlePanel theme={theme}>
        <Box maxWidth="200px" mx="auto" mb={8}>
          <Box component="img" src={logo} alt={`Logo ${name}`} width="100%" />
        </Box>
        <h3 className={classes.title}>
          {title}
        </h3>
        <p className={classes.description}>
          {description}
        </p>
      </SectorsContentMiddlePanel>
      <SectorsContentRightPanel>
        <Box height="50%" width="100%" bgcolor="#666">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${map.latitude},${map.longitude}&zoom=13&size=400x400&key=${process.env.GOOGLE_API_KEY}`}
            alt={`Directions to ${name}`}
          />
        </Box>
        <Box width="100%" display="flex" margin="auto 0">
          <ul className={classes.list}>
            {features.map((feature) => (
              <li className={classes.listItem}>
                {feature}
              </li>
            ))}
          </ul>
        </Box>
      </SectorsContentRightPanel>
    </Grid>
  );
};

SectorsContent.propTypes = {
  classes: PropTypes.any,
  features: PropTypes.any,
  gallery: PropTypes.any,
  logo: PropTypes.any,
  map: PropTypes.any,
  name: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
};

export default SectorsContent;

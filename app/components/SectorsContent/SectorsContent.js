import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Carousel from '@livipdev/core/Carousel';
import CarouselDots from '@livipdev/core/CarouselDots';
import Grid from '@livipdev/core/Grid';
import useTheme from '@livipdev/core/styles/useTheme';

import SectorsContentMiddlePanel from '../SectorsContentMiddlePanel';
import SectorsContentLeftPanel from '../SectorsContentLeftPanel';
import SectorsContentRightPanel from '../SectorsContentRightPanel';

const SectorsContent = ({ classes, features, gallery, logo, logo_event, map, name, title, description }) => {
  const theme = useTheme();
  const [carouselPage, setCarouselPage] = useState(0);

  return (
    <Grid container>
      <SectorsContentLeftPanel>
        <Carousel
          value={carouselPage}
          onChange={setCarouselPage}
          className={classes.carousel}
          responsive
        >
          {gallery.map((image) => (
            <img className={classes.image} src={image} alt="" role="presentation" />
          ))}
        </Carousel>
        <CarouselDots
          value={carouselPage}
          onChange={setCarouselPage}
          length={gallery.length}
          customClass={classes.dots}
        />
      </SectorsContentLeftPanel>
      <SectorsContentMiddlePanel theme={theme}>
        {/* <Box maxWidth="200px" mx="auto" mb={8}>
          <Box component="img" src={logo} alt={`Logo ${name}`} width="100%" />
        </Box> */}
        <h3 className={classes.title}>
          {title}
        </h3>
        <p className={classes.description}>
          {description}
        </p>
      </SectorsContentMiddlePanel>
      <SectorsContentRightPanel>
        <Box height="50%" width="100%" bgcolor="#f6f6f6" style={{textAlign: "center", padding: "10% 0"}}>
          <img
            src={logo_event}
            alt={`${name}`}
            width="35%"
            style={{ transform: "translate(0, 50%)"}}
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

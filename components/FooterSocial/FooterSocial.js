import React from 'react';
import PropTypes from 'prop-types';

import LinkedIn from './icon-linkedin.svg';
import Instagram from './icon-instagram.svg';
import WhatsApp from './icon-whatsapp.svg';

const FooterSocial = ({ classes }) => (
  <ul className={classes.wrapper}>
    <li className={classes.item}>
      <LinkedIn />
    </li>
    <li className={classes.item}>
      <Instagram />

    </li>
    <li className={classes.item}>
      <WhatsApp />
    </li>
  </ul>
);

FooterSocial.propTypes = {
  classes: {
    item: PropTypes.string,
    wrapper: PropTypes.string,
  },
};

export default FooterSocial;

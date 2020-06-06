import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Typography from '@livipdev/core/Typography';
import { switchLanguage } from './builders';
import messages from './messages';

const FooterIntl = ({ classes }) => {
  const switchToPortuguese = () => switchLanguage('pt-BR');
  const switchToEnglish = () => switchLanguage('en-US');

  return(
    <Fragment>
      <Typography
        className={ classes.button }
        onClick={switchToPortuguese}
        variant="body2"
      >
        <FormattedMessage {...messages.pt} />
      </Typography>

      <Typography
        className={ classes.button }
        onClick={switchToEnglish}
        variant="body2"
      >
        <FormattedMessage {...messages.en} />
      </Typography>
    </Fragment>
  );
};

FooterIntl.propTypes = {
  classes: PropTypes.object,
};

export default FooterIntl;

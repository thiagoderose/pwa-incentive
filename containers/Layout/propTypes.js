import PropTypes from 'prop-types';
import config from '@livipdev/config';

const propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(config.variants.available),
};

export default propTypes;

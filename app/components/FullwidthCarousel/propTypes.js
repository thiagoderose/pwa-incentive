import PropTypes from 'prop-types';

const slidePropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const propTypes = {
  slides: PropTypes.shape(slidePropTypes).isRequired,
  classes: PropTypes.obj,
};

export default propTypes;

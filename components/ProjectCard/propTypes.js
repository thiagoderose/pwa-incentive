import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    wrapper: PropTypes.string,
  }),
  company: PropTypes.object,
  title: PropTypes.object,
};

export default propTypes;

import PropTypes from 'prop-types';

import projectPropTypes from '../ProjectCard/propTypes';

const propTypes = {
  projects: PropTypes.arrayOf(projectPropTypes),
  columns: PropTypes.int,
  cellHeight: PropTypes.int,
  spacingType: PropTypes.string,
  classes: PropTypes.obj,
  customClass: PropTypes.string,
};

export default propTypes;

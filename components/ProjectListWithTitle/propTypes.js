import PropTypes from 'prop-types';
import projectPropTypes from '@livipdev/core/ProjectCard/propTypes';

const propTypes = {
  category: PropTypes.string,
  projects: PropTypes.arrayOf(projectPropTypes),
};

export default propTypes;

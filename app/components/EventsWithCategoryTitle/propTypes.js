import PropTypes from 'prop-types';
import { eventPropTypes } from '@livipdev/containers/EventFilteredList/propTypes';

const propTypes = {
  category: PropTypes.string,
  events: PropTypes.arrayOf(eventPropTypes),
};

export default propTypes;

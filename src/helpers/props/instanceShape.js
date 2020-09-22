import PropTypes from 'prop-types';

const instanceShape = PropTypes.shape({
  dosage: PropTypes.bool.isRequired,
  endDate: PropTypes.array.isRequired,
  startDate: PropTypes.string.isRequired,
  userNotes: PropTypes.number.isRequired,
});

export default { instanceShape };

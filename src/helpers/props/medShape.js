import PropTypes from 'prop-types';

const medShape = PropTypes.shape({
  currentPrescription: PropTypes.bool.isRequired,
  prescriptionInstances: PropTypes.array.isRequired,
  userNotes: PropTypes.string.isRequired,
  userRating: PropTypes.number.isRequired,
  userSideEffects: PropTypes.array.isRequired,
});

export default { medShape };

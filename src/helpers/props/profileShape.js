import PropTypes from 'prop-types';

const profileShape = PropTypes.shape({
  aboutSection: PropTypes.string.isRequired,
  medicalHistory: PropTypes.array.isRequired,
  shareLink: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { profileShape };

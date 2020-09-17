import React from 'react';

import PropTypes from 'prop-types';

import './ProfileMedHistory.scss';

import profileShape from '../../helpers/props/profileShape';

import SingleMed from './singleMed/singleMed';

class ProfileMedHistory extends React.Component {
  static propTypes = {
    profile: profileShape.profileShape,
    showMedPage: PropTypes.func.isRequired,
  }

  render() {
    const { medicalHistory, showMedPage } = this.props;

    const singleMed = medicalHistory.map((medication) => <SingleMed showMedPage={showMedPage} key={medication} medication={medication} />);

    return (
          <div className="med-history">
              <p className="med-history-header">My Medical History</p>
              <div className="med-history-body">
                {singleMed}
              </div>
          </div>
    );
  }
}

export default ProfileMedHistory;

import React from 'react';

import './ProfileMedHistory.scss';

import profileShape from '../../helpers/props/profileShape';

import SingleMed from './singleMed/singleMed';

class ProfileMedHistory extends React.Component {
    state= {
      medicalHistory: this.props,
    }
    /* static propTypes = {
      profile: profileShape.profileShape,
    } */

    // also needs props for singleMed

    render() {
      console.warn(this.props);
      // const singleMed = medicalHistory.forEach((medication) => <SingleMed medication={medication} />);

      return (
          <div className="med-history">
              <p className="med-history-header">My Medical History</p>
              <div className="med-history-body">

              </div>
          </div>
      );
    }
}

export default ProfileMedHistory;

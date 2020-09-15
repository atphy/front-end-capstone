import React from 'react';

import './Profile.scss';

import About from '../About/About';
import ProfileMedHistory from '../ProfileMedHistory/ProfileMedHistory';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <About className="about"/>
        <ProfileMedHistory className="med-history"/>
      </div>
    );
  }
}

export default Profile;

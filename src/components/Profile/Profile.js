import React from 'react';

import './Profile.scss';

import About from '../About/About';
import ProfileMedHistory from '../ProfileMedHistory/ProfileMedHistory';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <About className="about"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Oak_tree_with_moon_and_wildflowers.jpg" alt="" className="profile-image"></img>
        <ProfileMedHistory className="med-history"/>
      </div>
    );
  }
}

export default Profile;

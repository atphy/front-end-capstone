import React from 'react';

import './Profile.scss';

import userData from '../../helpers/data/userData';
import authData from '../../helpers/data/authData';

import About from '../About/About';
import ProfileMedHistory from '../ProfileMedHistory/ProfileMedHistory';

class Profile extends React.Component {
    state = {
      profile: {
        aboutSection: '',
        medicalHistory: [],
        shareLink: '',
        uid: '',
      },
    }

    componentDidMount() {
      userData.getProfileByUid(authData.getUid())
        .then((profile) => this.setState({ profile }))
        .catch((err) => console.error('profile could not be fetched', err));
    }

    render() {
      const { profile } = this.state;
      const { medicalHistory } = profile;

      return (
      <div className="profile">
        <About profile={profile} className="about"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Oak_tree_with_moon_and_wildflowers.jpg" alt="" className="profile-image"></img>
        <ProfileMedHistory medicalHistory={medicalHistory} className="med-history"/>
      </div>
      );
    }
}

export default Profile;

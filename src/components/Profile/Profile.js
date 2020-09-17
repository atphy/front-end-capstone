import React from 'react';

import './Profile.scss';

import userData from '../../helpers/data/userData';
import authData from '../../helpers/data/authData';

import About from '../About/About';
import ProfileMedHistory from '../ProfileMedHistory/ProfileMedHistory';
import MedPage from '../MedPage/MedPage';

class Profile extends React.Component {
    state = {
      profile: {
        aboutSection: '',
        medicalHistory: [],
        shareLink: '',
        uid: '',
      },
      medPage: false,
    }

    showMedPage = () => {
      this.setState({ medPage: true });
    }

    componentDidMount() {
      userData.getProfileByUid(authData.getUid())
        .then((profile) => this.setState({ profile }))
        .catch((err) => console.error('profile could not be fetched', err));
    }

    render() {
      const { profile, medPage } = this.state;
      const { medicalHistory } = profile;

      return (
      <div>
                            {
                      medPage
                        ? <MedPage />
                        : <div className="profile">
                            <About profile={profile} className="about"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Oak_tree_with_moon_and_wildflowers.jpg" alt="" className="profile-image"></img>
                            <ProfileMedHistory showMedPage={this.showMedPage} medicalHistory={medicalHistory} className="med-history"/>
                        </div>
                  }

      </div>
      );
    }
}

export default Profile;

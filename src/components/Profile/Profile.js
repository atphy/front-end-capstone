import React from 'react';
import PropTypes from 'prop-types';

import './Profile.scss';

import userData from '../../helpers/data/userData';
import medData from '../../helpers/data/medData';
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
      medPage: true,
      selectedMed: '',
      medInfo: {
        currentPrescription: false,
        prescriptionInstances: [],
        userNotes: ' ',
        userRating: 0,
        userSideEffects: [],
      },
      potentialEffects: [],
    }

    static propTypes = {
      changeHeader: PropTypes.func.isRequired,
    }

    showMedPage = (selected) => {
      this.setState({ medPage: true });
      const setSelectedMed = (selectedMed) => {
        this.setState({ selectedMed });
      };
      setSelectedMed(selected);
      const { changeHeader } = this.props;
      changeHeader(selected);
      console.warn(selected);
      const uid = authData.getUid();
      medData.getMedByName(uid, selected)
        .then((medInfo) => this.setState({ medInfo }));
    }

    setSideEffects = (potentialEffects) => {
      this.setState({ potentialEffects });
    }

    loadProfile = () => {
      userData.getProfileByUid(authData.getUid())
        .then((profile) => this.setState({ profile }))
        .catch((err) => console.error('profile could not be fetched', err));
    }

    hideMedPage = () => {
      this.setState({ medPage: false });
      this.loadProfile();
      const { changeHeader } = this.props;
      changeHeader('Timmi');
    }

    componentDidMount() {
      this.loadProfile();
    }

    render() {
      const {
        profile, medPage, selectedMed, medInfo, potentialEffects,
      } = this.state;
      const { medicalHistory } = profile;

      return (
      <div>
                            {
                      medPage
                        ? <MedPage potentialEffects={potentialEffects} medInfo = {medInfo} selectedMed={selectedMed} hideMedPage={this.hideMedPage} />
                        : <div className="profile">
                            <About loadProfile={this.loadProfile} profile={profile} className="about"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Oak_tree_with_moon_and_wildflowers.jpg" alt="" className="profile-image"></img>
                            <ProfileMedHistory setSideEffects={this.setSideEffects} showMedPage={this.showMedPage} medicalHistory={medicalHistory} className="med-history"/>
                        </div>
                  }

      </div>
      );
    }
}

export default Profile;

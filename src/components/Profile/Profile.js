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
      medPage: false,
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
      const setSelectedMed = (selectedMed) => {
        this.setState({ selectedMed });
      };
      setSelectedMed(selected);
      const uid = authData.getUid();
      medData.getMedByName(uid, selected)
        .then((medInfo) => this.setState({ medInfo }))
        .then(() => this.setState({ medPage: true }));
      const { changeHeader } = this.props;
      changeHeader(selected);
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

    checkForMedInfo = () => {
      const { medInfo } = this.state;
      if (medInfo) {
        return medInfo;
      }
      return '';
    }

    deleteUserMed = (medId) => {
      const { profile } = this.state;
      const medArray = profile.medicalHistory;
      const medToDelete = medArray.indexOf(medId);
      medArray.splice(medToDelete, 1);

      const myUpdatedUser = {
        aboutSection: profile.aboutSection,
        medicalHistory: medArray,
        shareLink: profile.shareLink,
        uid: profile.uid,
      };
      userData.updateAbout(profile.id, myUpdatedUser);
    }

    deleteInstances = () => {
      const { medInfo } = this.state;
      if (medInfo.prescriptionInstances.length > 1) {
        medInfo.prescriptionInstances.forEach((instance) => { userData.deleteMedInstance(instance); });
      } this.loadProfile();
    }

    deleteMed = (medId) => {
      const { profile } = this.state;
      medData.getMedByName(profile.uid, medId)
        .then((info) => this.setState({ medInfo: info }))
        .then(() => userData.deleteMed(profile.uid, medId))
        .then(() => this.deleteUserMed(medId))
        .then(() => this.deleteInstances())
        .then(() => this.loadProfile());
    }

    render() {
      const {
        profile, medPage, selectedMed, medInfo, potentialEffects,
      } = this.state;
      const { medicalHistory } = profile;
      const { prescriptionInstances } = this.checkForMedInfo();

      return (
      <div>
                            {
                      medPage
                        ? <MedPage profile={profile} showMedPage={this.showMedPage} prescriptionInstances={prescriptionInstances} potentialEffects={potentialEffects} medInfo={medInfo} selectedMed={selectedMed} hideMedPage={this.hideMedPage} />
                        : <div className="profile">
                            <About loadProfile={this.loadProfile} profile={profile} className="about"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Oak_tree_with_moon_and_wildflowers.jpg" alt="" className="profile-image"></img>
                            <ProfileMedHistory deleteMed={this.deleteMed} setSideEffects={this.setSideEffects} showMedPage={this.showMedPage} medicalHistory={medicalHistory} className="med-history"/>
                        </div>
                  }

      </div>
      );
    }
}

export default Profile;

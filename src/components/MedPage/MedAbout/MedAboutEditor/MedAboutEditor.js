import React from 'react';
import PropTypes from 'prop-types';

import medData from '../../../../helpers/data/medData';
import userData from '../../../../helpers/data/userData';

import medShape from '../../../../helpers/props/medShape';
import profileShape from '../../../../helpers/props/profileShape';

class MedAboutEditor extends React.Component {
    state = {
      userNotes: '',
      userRating: '',
    }

    static propTypes = {
      medInfo: medShape.medShape,
      userRating: PropTypes.string.isRequired,
      userNotes: PropTypes.string.isRequired,
      editorBool: PropTypes.func.isRequired,
      selectedMed: PropTypes.string.isRequired,
      showMedPage: PropTypes.func.isRequired,
      profile: profileShape.profileShape,
    }

    addMedToProfile = () => {
      const { profile, selectedMed } = this.props;
      const medHistoryArray = profile.medicalHistory;
      medHistoryArray.indexOf(selectedMed) === -1 ? medHistoryArray.push(selectedMed) : console.warn('This item already exists');

      const myUpdatedUser = {
        aboutSection: profile.aboutSection,
        medicalHistory: medHistoryArray,
        shareLink: profile.shareLink,
        uid: profile.uid,
      };
      userData.updateAbout(profile.id, myUpdatedUser);
    }

    changeNotesEvent = (e) => {
      e.preventDefault();
      this.setState({ userNotes: e.target.value });
    }

    changeRatingEvent = (e) => {
      e.preventDefault();
      this.setState({ userRating: e.target.value });
    }

    editMedEvent = (e) => {
      e.preventDefault();
      const { userNotes, userRating } = this.state;
      const {
        editorBool, medInfo, selectedMed, showMedPage,
      } = this.props;
      const currentFilter = () => (medInfo
        ? medInfo.currentPrescription
        : false);
      const instanceFilter = () => (medInfo
        ? medInfo.prescriptionInstances
        : ['']);
      const effectsFilter = () => (medInfo
        ? medInfo.userSideEffects
        : ['']);
      const myUpdatedMed = {
        currentPrescription: currentFilter(),
        prescriptionInstances: instanceFilter(),
        userNotes,
        userRating,
        userSideEffects: effectsFilter(),
      };
      if (currentFilter() !== false || instanceFilter()[0] !== '' || effectsFilter()[0] !== '' || userNotes !== '' || userRating !== '') {
        medData.updateMed('qHFtRWJyUVMz1YeYvi3IyvQEjZf2', selectedMed, myUpdatedMed)
          .then(() => { showMedPage(selectedMed); });
        editorBool();
        this.addMedToProfile();
      } editorBool();
    }

    componentDidMount() {
      const { userRating, userNotes } = this.props;
      this.setState({ userRating });
      this.setState({ userNotes });
    }

    render() {
      const { userRating, userNotes } = this.state;

      return (
        <form>
        <div className="form-group">
           <textarea defaultValue={userNotes} className="form-control" id="formGroupExampleInput2" placeholder="Notes" onChange={this.changeNotesEvent} required />
        </div>
        <div className="form-group">
          <input type="number" defaultValue={userRating} className="form-control" id="formGroupExampleInput" placeholder="Rating" min="1" max="5" onChange={this.changeRatingEvent} required />
        </div>
        <button type="submit" value="Submit" onClick={this.editMedEvent}></button>
        </form>
      );
    }
}

export default MedAboutEditor;

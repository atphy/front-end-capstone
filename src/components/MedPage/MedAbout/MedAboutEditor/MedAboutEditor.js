import React from 'react';
import PropTypes from 'prop-types';

import medData from '../../../../helpers/data/medData';

import medShape from '../../../../helpers/props/medShape';

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

      medData.updateMed('qHFtRWJyUVMz1YeYvi3IyvQEjZf2', selectedMed, myUpdatedMed)
        .then(() => { showMedPage(selectedMed); });
      editorBool();
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

import React from 'react';

import PropTypes from 'prop-types';

import './ProfileMedHistory.scss';

import profileShape from '../../helpers/props/profileShape';

import SingleMed from './singleMed/singleMed';
import AddMedModal from './AddMedModal/AddMedModal';

class ProfileMedHistory extends React.Component {
    state = {
      modalDisplay: 'none',
    }

  static propTypes = {
    profile: profileShape.profileShape,
    showMedPage: PropTypes.func.isRequired,
  }

  showModal = () => {
    this.setState({ modalDisplay: 'block' });
  }

  hideModal = () => {
    this.setState({ modalDisplay: 'none' });
  }

  render() {
    const { medicalHistory, showMedPage } = this.props;
    const { modalDisplay } = this.state;

    const singleMed = medicalHistory.map((medication) => <SingleMed showMedPage={showMedPage} key={medication} medication={medication} />);

    return (
          <div className="med-history">
              <AddMedModal showMedPage={showMedPage} hideModal={this.hideModal} modalDisplay={modalDisplay}/>
              <button className="add-history" onClick={this.showModal}><i className="fas fa-plus-square"></i></button>
              <p className="med-history-header">My Medical History</p>
              <div className="med-history-body">
                {singleMed}
              </div>
          </div>
    );
  }
}

export default ProfileMedHistory;

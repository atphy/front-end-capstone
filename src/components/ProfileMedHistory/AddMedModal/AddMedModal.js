import React from 'react';
import PropTypes from 'prop-types';

import openFDA from '../../../helpers/data/openFDA';

import './AddMedModal.scss';

class AddMedModal extends React.Component {
    state = {
      medSearch: '',
    }

    static propTypes = {
      modalDisplay: PropTypes.string.isRequired,
      hideModal: PropTypes.func.isRequired,
      showMedPage: PropTypes.func.isRequired,
    }

    medSearchEvent = (e) => {
      e.preventDefault();
      const { medSearch } = this.state;
      const { showMedPage } = this.props;
      openFDA.readFDA(medSearch)
        .then((medSymptoms) => {
          if (medSymptoms) {
            console.warn('found em', medSymptoms);
            const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
            showMedPage(capitalize(medSearch));
          } else {
            console.warn('didn\'t find em');
          }
        });
    }

    searchEvent = (e) => {
      e.preventDefault();
      this.setState({ medSearch: e.target.value });
    }

    render() {
      const { modalDisplay, hideModal } = this.props;
      const modalStyle = {
        display: modalDisplay,
      };

      return (
      <div id="myModal" className="modal" style={modalStyle}>
        <div className="modal-content">
          <span className="close" onClick={hideModal}>&times;</span>
          <textarea className="edit-about" onChange={this.searchEvent} ></textarea>
          <button className="edit-about-submit" onClick={this.medSearchEvent}><i className="fas fa-search"></i></button>
        </div>

      </div>
      );
    }
}

export default AddMedModal;

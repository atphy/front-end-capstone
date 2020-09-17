import React from 'react';
import PropTypes from 'prop-types';

import openFDA from '../../../helpers/data/openFDA';

import './AddMedModal.scss';

class AddMedModal extends React.Component {
    static propTypes = {
      modalDisplay: PropTypes.string.isRequired,
      hideModal: PropTypes.func.isRequired,
    }

    medSearchEvent = (e) => {
      openFDA.readFDA('patient.drug.openfda.generic_name:"bupropion"&count=patient.reaction.reactionmeddrapt.exact');
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
          <textarea className="edit-about" ></textarea>
          <button className="edit-about-submit" onClick={this.medSearchEvent}><i className="fas fa-search"></i></button>
        </div>

      </div>
      );
    }
}

export default AddMedModal;

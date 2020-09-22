import React from 'react';
import PropTypes from 'prop-types';

import openFDA from '../../../helpers/data/openFDA';

class SingleMed extends React.Component {
    static propTypes = {
      medication: PropTypes.string.isRequired,
      showMedPage: PropTypes.func.isRequired,
      setSideEffects: PropTypes.func.isRequired,
      deleteMed: PropTypes.func.isRequired,
    }

    medClickEvent = (e) => {
      e.preventDefault();
      const { medication, showMedPage, setSideEffects } = this.props;
      openFDA.readFDA(medication)
        .then((medSymptoms) => {
          if (medSymptoms) {
            setSideEffects(medSymptoms);
            showMedPage(medication);
          } else {
            console.warn('didn\'t find em');
          }
        });
    }

    deleteClickEvent = (e) => {
      e.preventDefault();
      const { deleteMed, medication } = this.props;
      deleteMed(medication);
    }

    render() {
      const { medication } = this.props;

      return (
        <div className="med-card">
          <p onClick={this.medClickEvent} className="single-med-card">{medication}</p>
          <button onClick={this.deleteClickEvent} ></button>
        </div>
      );
    }
}

export default SingleMed;

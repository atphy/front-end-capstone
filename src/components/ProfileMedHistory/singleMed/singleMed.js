import React from 'react';
import PropTypes from 'prop-types';

import openFDA from '../../../helpers/data/openFDA';

class SingleMed extends React.Component {
    static propTypes = {
      medication: PropTypes.string.isRequired,
      showMedPage: PropTypes.func.isRequired,
    }

    medClickEvent = (e) => {
      e.preventDefault();
      const { medication, showMedPage } = this.props;
      openFDA.readFDA(medication)
        .then((medSymptoms) => {
          if (medSymptoms) {
            console.warn('found em', medSymptoms);
            showMedPage(medication);
          } else {
            console.warn('didn\'t find em');
          }
        });
    }

    medSearchEvent = (e) => {
      e.preventDefault();
      const { medSearch } = this.state;
      const { showMedPage } = this.props;
      openFDA.readFDA(medSearch)
        .then((medSymptoms) => {
          if (medSymptoms) {
            console.warn('found em', medSymptoms);
            showMedPage(medSearch);
          } else {
            console.warn('didn\'t find em');
          }
        });
    }

    render() {
      const { medication } = this.props;

      return (
        <div onClick={this.medClickEvent} className="med-card">
          <p className="single-med-card">{medication}</p>
        </div>
      );
    }
}

export default SingleMed;

import React from 'react';
import PropTypes from 'prop-types';

class SingleMed extends React.Component {
    static propTypes = {
      key: PropTypes.string.isRequired,
      medication: PropTypes.string.isRequired,
      showMedPage: PropTypes.func.isRequired,
    }

    medClickEvent = (e) => {
      e.preventDefault();
      const { medication, showMedPage } = this.props;
      showMedPage(medication);
    }

    render() {
      const { medication, showMedPage } = this.props;

      return (
        <div onClick={this.medClickEvent} className="med-card">
          <p className="single-med-card">{medication}</p>
        </div>
      );
    }
}

export default SingleMed;

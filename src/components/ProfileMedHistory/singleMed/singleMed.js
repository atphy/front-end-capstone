import React from 'react';
import PropTypes from 'prop-types';

class SingleMed extends React.Component {
    static propTypes = {
      medication: PropTypes.string.isRequired,
      showMedPage: PropTypes.func.isRequired,
    }

    render() {
      const { medication, showMedPage } = this.props;

      return (
        <div onClick={showMedPage} className="med-card">
          <p className="single-med-card">{medication}</p>
        </div>
      );
    }
}

export default SingleMed;

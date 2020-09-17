import React from 'react';
import PropTypes from 'prop-types';

class SingleMed extends React.Component {
    static propTypes = {
      medication: PropTypes.string.isRequired,
    }

    render() {
      const { medication } = this.props;

      return (
        <div className="med-card">
          <p className="single-med-card">{medication}</p>
        </div>
      );
    }
}

export default SingleMed;

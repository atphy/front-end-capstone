import React from 'react';
import PropTypes from 'prop-types';

import './MedAbout.scss';

class MedAbout extends React.Component {
    static propTypes = {
      selectedMed: PropTypes.string.isRequired,
      userNotes: PropTypes.string.isRequired,
    }

    render() {
      const { selectedMed, userNotes } = this.props;
      return (
        <div className="about-med-container">
        <h1 className="about-header">My Overall Notes About {selectedMed}</h1>
      <div className="about-container"><p className="about-body">{userNotes}</p></div>
    </div>
      );
    }
}

export default MedAbout;

import React from 'react';
import PropTypes from 'prop-types';

import medShape from '../../../helpers/props/medShape';

import './MedAbout.scss';

class MedAbout extends React.Component {
    static propTypes = {
      selectedMed: PropTypes.string.isRequired,
      medInfo: medShape.medShape,
    }

    render() {
      const { selectedMed, medInfo } = this.props;
      return (
        <div className="about-med-container">
        <h1 className="about-header">My Overall Notes About {selectedMed}</h1>
          <div className="about-container">
            <p className="about-body">
      { medInfo
        ? medInfo.userNotes
        : ''
      }
            </p>
        </div>
    </div>
      );
    }
}

export default MedAbout;

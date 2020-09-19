import React from 'react';
import PropTypes from 'prop-types';

import './MedPage.scss';
import MedAbout from './MedAbout/MedAbout';

import medShape from '../../helpers/props/medShape';

class MedPage extends React.Component {
    static propTypes = {
      hideMedPage: PropTypes.func.isRequired,
      selectedMed: PropTypes.string.isRequired,
      medInfo: medShape.medShape,
      potentialEffects: PropTypes.array.isRequired,
    }

    render() {
      const {
        hideMedPage, selectedMed, medInfo, potentialEffects,
      } = this.props;
      return (
      <div>
          <button className="return-profile" onClick={hideMedPage}>Return to Profile</button>
        <MedAbout medInfo={medInfo} selectedMed={selectedMed} />
      </div>
      );
    }
}

export default MedPage;

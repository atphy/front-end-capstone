import React from 'react';
import PropTypes from 'prop-types';

import './MedPage.scss';

import MedAbout from './MedAbout/MedAbout';
import SideEffectsBox from './SideEffectsBox/SideEffectsBox';
import PrescriptionInstances from './PrescriptionInstances/PrescriptionInstances';

import medShape from '../../helpers/props/medShape';

class MedPage extends React.Component {
    static propTypes = {
      showMedPage: PropTypes.func.isRequired,
      hideMedPage: PropTypes.func.isRequired,
      selectedMed: PropTypes.string.isRequired,
      medInfo: medShape.medShape,
      potentialEffects: PropTypes.array.isRequired,
      prescriptionInstances: PropTypes.array,
    }

    render() {
      const {
        showMedPage, hideMedPage, selectedMed, medInfo, potentialEffects, prescriptionInstances,
      } = this.props;

      return (
      <div className="med-page-container">
        <button className="return-profile" onClick={hideMedPage}>Return to Profile</button>
        <MedAbout showMedPage={showMedPage} medInfo={medInfo} selectedMed={selectedMed} />
        <SideEffectsBox potentialEffects={potentialEffects}/>
        <PrescriptionInstances prescriptionInstances={prescriptionInstances} medInfo={medInfo} selectedMed={selectedMed}/>
      </div>
      );
    }
}

export default MedPage;

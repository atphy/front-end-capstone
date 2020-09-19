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
    }

    render() {
      const { hideMedPage, selectedMed, medInfo } = this.props;
      const { userNotes } = medInfo;
      return (
      <div>
          <button className="return-profile" onClick={hideMedPage}>Return to Profile</button>
        <MedAbout userNotes={userNotes} selectedMed={selectedMed} />
      </div>
      );
    }
}

export default MedPage;

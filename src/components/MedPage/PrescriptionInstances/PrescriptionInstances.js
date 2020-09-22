import React from 'react';
import PropTypes from 'prop-types';

import medShape from '../../../helpers/props/medShape';

import SingleInstance from './SingleInstance/SingleInstance';

import './PrescriptionInstances.scss';

class PrescriptionInstances extends React.Component {
    static propTypes = {
      selectedMed: PropTypes.string.isRequired,
      medInfo: medShape.medShape,
      prescriptionInstances: PropTypes.array,
    }

    render() {
      const { selectedMed, prescriptionInstances } = this.props;
      const medCard = () => prescriptionInstances.map((instance) => <SingleInstance key={instance} instance={instance} />);
      return (
        <div className="instance-container">
            <h1 className="instance-header">My History with {selectedMed}</h1>
        <div className="instance-box">
        { prescriptionInstances
          ? medCard()
          : ''
                }

        </div>
        </div>
      );
    }
}

export default PrescriptionInstances;

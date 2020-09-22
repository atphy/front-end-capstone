import React from 'react';
import PropTypes from 'prop-types';

import medShape from '../../../helpers/props/medShape';
import profileShape from '../../../helpers/props/profileShape';

import instanceData from '../../../helpers/data/instanceData';
import medData from '../../../helpers/data/medData';

import SingleInstance from './SingleInstance/SingleInstance';
import InstanceEditor from './InstanceEditor/InstanceEditor';

import './PrescriptionInstances.scss';

class PrescriptionInstances extends React.Component {
    static propTypes = {
      selectedMed: PropTypes.string.isRequired,
      medInfo: medShape.medShape,
      prescriptionInstances: PropTypes.array,
      showMedPage: PropTypes.func.isRequired,
      profile: profileShape.profileShape,
    }

    state = {
      editor: false,
    }

    editorBool = () => {
      const { editor } = this.state;
      this.setState({ editor: !editor });
    }

    addInstancetoMed = (newInstanceId) => {
      const { selectedMed, profile, medInfo } = this.props;
      const medInstanceArray = medInfo.prescriptionInstances;
      medInstanceArray.push(newInstanceId);
      const newMedInstance = {
        currentPrescription: medInfo.currentPrescription,
        prescriptionInstances: medInstanceArray,
        userNotes: medInfo.userNotes,
        userRating: medInfo.userRating,
        userSideEffects: medInfo.userSideEffects,
      };
      medData.updateMed(profile.uid, selectedMed, newMedInstance);
    }

    addInstance = (newInstance) => {
      instanceData.createInstance(newInstance)
        .then((instance) => {
          this.addInstancetoMed(instance.data.name);
          this.setState({ editor: false });
        })
        .catch((err) => console.error('create failed', err));
    }

    deleteMedInstance = (instanceId) => {
      const {
        medInfo, profile, selectedMed, showMedPage,
      } = this.props;
      const instanceArray = medInfo.prescriptionInstances;
      const instanceToDelete = instanceArray.indexOf(instanceId);
      instanceArray.splice(instanceToDelete, 1);

      const myUpdatedMed = {
        currentPrescription: medInfo.currentPrescription,
        prescriptionInstances: instanceArray,
        userNotes: medInfo.userNotes,
        userRating: medInfo.userRating,
        userSideEffects: medInfo.userSideEffects,
      };
      medData.updateMed(profile.uid, selectedMed, myUpdatedMed)
        .then(() => showMedPage(selectedMed));
    }

    render() {
      const { selectedMed, prescriptionInstances, showMedPage } = this.props;
      const { editor } = this.state;
      console.warn(prescriptionInstances);
      const instanceChecker = () => {
        if (prescriptionInstances) {
          return prescriptionInstances.map((instance) => <SingleInstance deleteMedInstance={this.deleteMedInstance} selectedMed={selectedMed} showMedPage={showMedPage} key={instance} instance={instance} />);
        }
        return '';
      };

      return (
        <div className="instance-container">
            <div className="instance-header-container">
            <h1 className="instance-header">My History with {selectedMed}</h1>
            <button className="edit-instance-button" onClick={this.editorBool}><i className="fas fa-plus-square"></i></button>
            </div>
        { editor
          ? <InstanceEditor addInstance={this.addInstance} />
          : <div className="instance-box">
          <div className="about-container">
                  { prescriptionInstances
                    ? instanceChecker()
                    : ''
                }
                        </div>
                        </div>
                }

        </div>
      );
    }
}

export default PrescriptionInstances;

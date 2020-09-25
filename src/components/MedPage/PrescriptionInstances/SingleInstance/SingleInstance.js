import React from 'react';
import PropTypes from 'prop-types';

import instanceData from '../../../../helpers/data/instanceData';

import './SingleInstance.scss';

class SingleInstance extends React.Component {
state = {
  singleInstance: {
    dosage: '',
    startDate: '',
    endDate: '',
  },
}

  static propTypes = {
    showMedPage: PropTypes.func.isRequired,
    instance: PropTypes.string.isRequired,
    selectedMed: PropTypes.string.isRequired,
    deleteMedInstance: PropTypes.func.isRequired,
  }

  getInstance = () => {
    const { instance } = this.props;
    if (instance) {
      instanceData.getInstancesByMed(instance)
        .then((res) => {
          this.setState({ singleInstance: res });
        });
    }
  }

  componentDidMount() {
    this.getInstance();
  }

  deleteClickEvent = (e) => {
    e.preventDefault();
    const { instance, deleteMedInstance } = this.props;
    instanceData.deleteInstance(instance);
    deleteMedInstance(instance);
  }

  render() {
    return (
        <div className="single-instance-box">
            <p className="instance-dosage">{this.state.singleInstance.dosage}</p><br></br>
            <p className="instance-start-dates">{this.state.singleInstance.startDate} to {this.state.singleInstance.endDate}</p>
            <p className="instance-end-dates">{this.state.singleInstance.userNotes}</p>
            <button className="delete-instance-button" onClick={this.deleteClickEvent} ><i className="fas fa-times-circle"></i></button>
        </div>
    );
  }
}

export default SingleInstance;

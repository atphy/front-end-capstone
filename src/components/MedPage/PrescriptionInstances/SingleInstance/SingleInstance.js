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
    instance: PropTypes.string.isRequired,
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

  render() {
    return (
        <div className="single-instance-box">
            <p className="instance-dosage">{this.state.singleInstance.dosage}</p>
            <p className="instance-dates">{this.state.singleInstance.startDate} to {this.state.singleInstance.endDate}</p>
        </div>
    );
  }
}

export default SingleInstance;

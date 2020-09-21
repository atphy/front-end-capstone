import React from 'react';
import PropTypes from 'prop-types';

import instanceData from '../../../../helpers/data/instanceData';

import './SingleInstance.scss';

class SingleInstance extends React.Component {
state = {
  singleInstance: {},
}

  static propTypes = {
    instance: PropTypes.string.isRequired,
  }

  getInstance = () => {
    const { instance } = this.props;
    instanceData.getInstancesByMed(instance)
      .then((singleInstance) => { this.setState({ singleInstance }); });
  }

  componentDidMount() {
    this.getInstance();
  }

  render() {
    const { singleInstance } = this.state;
    return (
        <div className="single-instance-box">
            <p className="instance-dosage">{singleInstance.dosage}</p>
            <p className="instance-dates">{singleInstance.startDate} to {singleInstance.endDate}</p>
        </div>
    );
  }
}

export default SingleInstance;

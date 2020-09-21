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

  render() {
    this.getInstance();
    return (
        <div className="single-instance-box">
            <h1 className="single-instance">hi</h1>
        </div>
    );
  }
}

export default SingleInstance;

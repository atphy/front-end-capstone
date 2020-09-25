import React from 'react';
import PropTypes from 'prop-types';

import './SideEffectsBox.scss';

import medShape from '../../../helpers/props/medShape';

import SingleEffect from './SingleEffect/SingleEffect';

class SideEffectsBox extends React.Component {
    static propTypes = {
      potentialEffects: PropTypes.array.isRequired,
      medInfo: medShape.medShape,
    }

    render() {
      const { potentialEffects, medInfo } = this.props;
      const singleEffect = potentialEffects.map((effect) => <SingleEffect medInfo={medInfo} key={effect.term} effect={effect}/>);

      return (
        <div className="side-effects-container">
            {singleEffect}
        </div>
      );
    }
}

export default SideEffectsBox;

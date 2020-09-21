import React from 'react';
import PropTypes from 'prop-types';

import './SideEffectsBox.scss';

import SingleEffect from './SingleEffect/SingleEffect';

class SideEffectsBox extends React.Component {
    static propTypes = {
      potentialEffects: PropTypes.array.isRequired,
    }

    render() {
      const { potentialEffects } = this.props;
      // const testEffects = ['Diarrhea', 'Nausea', 'Headache', 'Ineffective'];
      const singleEffect = potentialEffects.map((effect) => <SingleEffect key={effect.term} effect={effect}/>);

      return (
        <div className="side-effects-container">
            {singleEffect}
        </div>
      );
    }
}

export default SideEffectsBox;

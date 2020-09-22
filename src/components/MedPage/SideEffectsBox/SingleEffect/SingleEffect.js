import React from 'react';
import PropTypes from 'prop-types';

import './SingleEffect.scss';

class SingleEffect extends React.Component {
    static propTypes = {
      effect: PropTypes.object.isRequired,
    }

    render() {
      const { effect } = this.props;

      return (
        <div className="single-effect-box">
            <h1 className="single-effect">{effect.term}</h1>
        </div>
      );
    }
}

export default SingleEffect;

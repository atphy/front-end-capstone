import React from 'react';
import PropTypes from 'prop-types';

import medShape from '../../../../helpers/props/medShape';

import './SingleEffect.scss';

class SingleEffect extends React.Component {
state = {
  userEffect: false,
};

    static propTypes = {
      effect: PropTypes.object.isRequired,
      medInfo: medShape.medShape,
    }

    userEffectAdd = () => {
      const { effect, medInfo } = this.props;
      medInfo.userSideEffects.push(effect);
      this.setState({ userEffect: true });
    }

    userEffectRemove = () => {
      const { effect, medInfo } = this.props;
      medInfo.userSideEffects.splice(effect, 1);
      this.setState({ userEffect: false });
    }

    userEffectClickEvent = (e) => {
      const { userEffect } = this.state;
      e.preventDefault();
      if (userEffect) {
        this.userEffectRemove();
        console.warn('remove');
      } else {
        this.userEffectAdd();
        console.warn('add');
      }
    }

    userEffect = () => {
      const { effect, medInfo } = this.props;
      if (medInfo) {
        const upperCaseUserEffects = medInfo.userSideEffects.map((f) => f.toUpperCase());
        if (upperCaseUserEffects.includes(effect.term)) {
          this.setState({ userEffect: true });
        } else {
          this.setState({ userEffect: false });
        }
      }
    }

    componentDidMount() {
      this.userEffect();
    }

    render() {
      const { effect } = this.props;

      return (
        <div onClick={this.userEffectClickEvent} className={this.state.userEffect ? 'single-effect-box-selected' : 'single-effect-box'}>
            <h1 className="single-effect">{effect.term}</h1>
        </div>
      );
    }
}

export default SingleEffect;

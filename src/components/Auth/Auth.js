import React from 'react';

import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className="Auth">
        <h1 className="title">Timmi</h1>
        <div className="slogan">
          <h1 className="slogan-front">About Your</h1>
          <h1 className="slogan-end">Self</h1>
        </div>
        <button className="btn-login">Sign in with Google</button>
      </div>
    );
  }
}

export default Auth;

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    return (
      <div className="Auth">
        <h1 className="title">Timmi</h1>
        <div className="slogan">
          <h1 className="slogan-front">About Your</h1>
          <h1 className="slogan-end">Self</h1>
        </div>
        <button className="btn-login" onClick={this.loginClickEvent}>Sign in with Google</button>
      </div>
    );
  }
}

export default Auth;

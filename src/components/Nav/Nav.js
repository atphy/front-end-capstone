import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Nav.scss';

class Nav extends React.Component {
logoutClick = (e) => {
  firebase.auth().signOut();
}

render() {
  return (
      <nav>
        <h1 className="nav-title">Timmi</h1>
        <div className="anchor-holder">
          <a className="nav-link">Get your private link for sharing</a>
          <a className="nav-logout" onClick={this.logoutClick}>Log out</a>
        </div>
      </nav>
  );
}
}

export default Nav;

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import PropTypes from 'prop-types';

import './Nav.scss';

class Nav extends React.Component {
    static propTypes = {
      header: PropTypes.string.isRequired,
    }

logoutClick = (e) => {
  firebase.auth().signOut();
}

render() {
  const { header } = this.props;
  return (
      <nav>
        <h1 className="nav-title">{header}</h1>
        <div className="anchor-holder">
          {/* <button className="nav-link">Get your private link for sharing</button> */}
          <button className="nav-logout" onClick={this.logoutClick}>Log out</button>
        </div>
      </nav>
  );
}
}

export default Nav;

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import Nav from '../components/Nav/Nav';
import Profile from '../components/Profile/Profile';

fbConnection();

class App extends React.Component {
state = {
  authed: false,
}

componentDidMount() {
  this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ authed: true });
    } else {
      this.setState({ authed: false });
    }
  });
}

componentWillUnmount() {
  this.removeListener();
}

render() {
  const { authed } = this.state;

  const loadComponent = () => {
    if (authed) {
      return <div>
              <Nav />
              <Profile />
            </div>;
    }
    return <Auth />;
  };
  return (
    <div className="App">{loadComponent()}</div>

  );
}
}

export default App;

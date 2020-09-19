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
  header: 'Timmi',
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

changeHeader = (header) => {
  this.setState({ header });
}

render() {
  const { authed, header } = this.state;

  const loadComponent = () => {
    if (authed) {
      return <div>
              <Nav header={header} />
              <Profile changeHeader={this.changeHeader} />
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

import React from 'react';

class MedPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="nav-title">Timmi</h1>
        <div className="anchor-holder">
          <button className="nav-link">Get your private link for sharing</button>
          <button className="nav-logout" onClick={this.logoutClick}>Log out</button>
        </div>
      </div>
    );
  }
}

export default MedPage;

import React from 'react';
import PropTypes from 'prop-types';

class MedPage extends React.Component {
    static propTypes = {
      hideMedPage: PropTypes.func.isRequired,
    }

    render() {
      const { hideMedPage } = this.props;
      return (
      <div>
        <h1 className="nav-title">Timmi</h1>
        <div className="anchor-holder">
          <button className="nav-link">Get your private link for sharing</button>
          <button className="nav-logout" onClick={hideMedPage}>Log out</button>
        </div>
      </div>
      );
    }
}

export default MedPage;

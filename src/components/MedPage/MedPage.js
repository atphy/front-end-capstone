import React from 'react';
import PropTypes from 'prop-types';

import './MedPage.scss';

class MedPage extends React.Component {
    static propTypes = {
      hideMedPage: PropTypes.func.isRequired,
    }

    render() {
      const { hideMedPage } = this.props;
      return (
      <div>
          <button className="return-profile" onClick={hideMedPage}>Return to Profile</button>
      </div>
      );
    }
}

export default MedPage;

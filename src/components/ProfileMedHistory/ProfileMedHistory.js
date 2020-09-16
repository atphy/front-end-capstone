import React from 'react';

import './ProfileMedHistory.scss';

import profileShape from '../../helpers/props/profileShape';

class ProfileMedHistory extends React.Component {
  /* static propTypes = {
      profile: profileShape.profileShape,
    } */

  render() {
    return (
          <div className="med-history">
              <p className="med-history-header">My Medical History</p>
              <div className="med-history-body">
              <div className="med-card">
                  <p className="single-med-card">Bupropion</p>
              </div>
              <div className="med-card">
                  <p className="single-med-card">Aripiprazole</p>
              </div>
              <div className="med-card">
                  <p className="single-med-card">Venlafaxine</p>
              </div>
              <div className="med-card">
                  <p className="single-med-card">Venlafaxine</p>
              </div>
              <div className="med-card">
                  <p className="single-med-card">Venlafaxine</p>
              </div>
              <div className="med-card">
                  <p className="single-med-card">Venlafaxine</p>
              </div>
              <div className="med-card">
                  <p className="single-med-card">Venlafaxine</p>
              </div>
              <div className="med-card">
                  <p className="single-med-card">Venlafaxine</p>
              </div>
              </div>
          </div>
    );
  }
}

export default ProfileMedHistory;

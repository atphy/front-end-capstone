import React from 'react';

import './About.scss';

import profileShape from '../../helpers/props/profileShape';

class About extends React.Component {
  static propTypes = {
    profile: profileShape.profileShape,
  }

  render() {
    const { profile } = this.props;

    return (
        <div className="about">
            <h1 className="about-title">About me</h1>
            <div className="about-container">
                <p className="about-body">{profile.aboutSection}</p>
            </div>
        </div>
    );
  }
}

export default About;

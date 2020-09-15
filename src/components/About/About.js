import React from 'react';

import './About.scss';

class About extends React.Component {
  render() {
    return (
        <div className="about">
            <h1 className="about-title">About me</h1>
            <div className="about-container">
                <p className="about-body">here we go</p>
            </div>
        </div>
    );
  }
}

export default About;

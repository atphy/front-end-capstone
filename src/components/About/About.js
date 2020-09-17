import React from 'react';

import './About.scss';

import profileShape from '../../helpers/props/profileShape';

import AboutEditor from './AboutEditor/AboutEditor';

class About extends React.Component {
  state = {
    editor: false,
  }

  static propTypes = {
    profile: profileShape.profileShape,
  }

  render() {
    const { profile } = this.props;
    const { editor } = this.state;

    return (
        <div className="about">
            <h1 className="about-title">About me</h1>
            <button className="edit-button" onClick={() => { this.setState({ editor: !editor }); }}><i className="fas fa-edit"></i></button>
            { editor
              ? <AboutEditor />
              : <div className="about-container"><p className="about-body">{profile.aboutSection}</p></div> }
        </div>
    );
  }
}

export default About;

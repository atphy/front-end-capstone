import React from 'react';
import PropTypes from 'prop-types';

import './About.scss';

import profileShape from '../../helpers/props/profileShape';

import AboutEditor from './AboutEditor/AboutEditor';

class About extends React.Component {
  state = {
    editor: false,
  }

  static propTypes = {
    profile: profileShape.profileShape,
    loadProfile: PropTypes.func.isRequired,
  }

  editorBool = () => {
    const { editor } = this.state;
    this.setState({ editor: !editor });
  }

  render() {
    const { profile, loadProfile } = this.props;
    const { editor } = this.state;
    const { aboutSection } = profile;
    const { id } = profile;

    return (
        <div className="about">
            <h1 className="about-title">About me</h1>
            <button className="edit-button" onClick={this.editorBool}><i className="fas fa-edit"></i></button>
            { editor
              ? <AboutEditor loadProfile={loadProfile} editorBool={this.editorBool} profile={profile} id={id} aboutSection={aboutSection} />
              : <div className="about-container"><p className="about-body">{aboutSection}</p></div> }
        </div>
    );
  }
}

export default About;

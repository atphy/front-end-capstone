import React from 'react';
import PropTypes from 'prop-types';
import profileShape from '../../../helpers/props/profileShape';

import userData from '../../../helpers/data/userData';

class AboutEditor extends React.Component {
  state = {
    newAbout: '',
  }

    static propTypes = {
      profile: profileShape.profileShape,
      aboutSection: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }

    changeAboutEvent = (e) => {
      e.preventDefault();
      this.setState({ newAbout: e.target.value });
    }

    editAboutEvent = (e) => {
      e.preventDefault();
      const { newAbout } = this.state;
      const { id } = this.props;
      const myUpdatedAbout = {
        aboutSection: newAbout,
      };

      userData.updateAbout(id, myUpdatedAbout);
    }

    render() {
      const { aboutSection } = this.props;
      return (
        <div className="editor-container">
         <p className="edit-about-body">Some ideas for questions your About Me could answer:</p>
         <p className="edit-about-body">How would you describe you mental state on any given day? On a good day? On a bad day? What would you like for a therapist to know about you?
          Have you contracted any diseases or undergone procedures that might be relevant? Test results related to a mental health diagnosis?
          Are there any therapies or treatments you've attempted other than FDA-recognized medications? </p>
         <p className="edit-about-body edit-about-body-bold">Please refrain from supplying any personal identifying information such as your name. This information should be conveyed directly to your
         chosen professional via phone call or email accompanied by your private profile link.﻿</p>
        <textarea className="edit-about" defaultValue={aboutSection} onChange={this.changeAboutEvent} ></textarea>
        <button className="edit-about-submit" onClick={this.editAboutEvent}><i className="fas fa-check"></i></button>
        </div>
      );
    }
}

export default AboutEditor;

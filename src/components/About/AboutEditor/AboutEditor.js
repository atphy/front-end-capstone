import React from 'react';
import PropTypes from 'prop-types';

class AboutEditor extends React.Component {
    static propTypes = {
      aboutSection: PropTypes.string.isRequired,
    }

    render() {
      const { aboutSection } = this.props;
      console.warn(aboutSection);
      return (
        <div className="editor-container">
         <p className="edit-about-body">Some ideas for questions your About Me could answer:</p>
         <p className="edit-about-body">How would you describe you mental state on any given day? On a good day? On a bad day? What would you like for a therapist to know about you?
          Have you contracted any diseases or undergone procedures that might be relevant? Test results related to a mental health diagnosis?
          Are there any therapies or treatments you've attempted other than FDA-recognized medications? </p>
         <p className="edit-about-body edit-about-body-bold">Please refrain from supplying any personal identifying information such as your name. This information should be conveyed directly to your
         chosen professional via phone call or email accompanied by your private profile link.﻿</p>
        <textarea className="edit-about" defaultValue={aboutSection} onChange={console.warn(aboutSection)} ></textarea>
        <button className="edit-about-submit"><i className="fas fa-check"></i></button>
        </div>
      );
    }
}

export default AboutEditor;

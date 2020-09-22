import React from 'react';
import PropTypes from 'prop-types';

import medShape from '../../../helpers/props/medShape';

import MedAboutEditor from './MedAboutEditor/MedAboutEditor';

import './MedAbout.scss';

class MedAbout extends React.Component {
    state = {
      editor: false,
    }

    static propTypes = {
      selectedMed: PropTypes.string.isRequired,
      medInfo: medShape.medShape,
    }

    editorBool = (e) => {
      e.preventDefault();
      const { editor } = this.state;
      this.setState({ editor: !editor });
    }

    componentDidMount() {
      const { medInfo } = this.props;
    }

    render() {
      const { selectedMed, medInfo } = this.props;
      const { editor } = this.state;
      return (
        <div className="about-med-container">
          <h1 className="about-header">My Overall Notes About {selectedMed}</h1>
          <button className="edit-button" onClick={this.editorBool}><i className="fas fa-edit"></i></button>
          <h1 className="med-rating">
          { medInfo
            ? medInfo.userRating
            : '0'
                }
              /5</h1>
                { editor
                  ? <MedAboutEditor userNotes={medInfo.userNotes} userRating={medInfo.userRating} medInfo={medInfo}/>
                  : <div className="about-container">
                  <p className="about-body">
                  { medInfo
                    ? medInfo.userNotes
                    : ''
                  }
                        </p>
                        </div>
                }
    </div>
      );
    }
}

export default MedAbout;

import React from 'react';
import PropTypes from 'prop-types';

// import medData from '../../../../helpers/data/medData';

import medShape from '../../../../helpers/props/medShape';

class MedAboutEditor extends React.Component {
    state = {
      userNotes: '',
      userRating: '',
    }

    static propTypes = {
      medInfo: medShape.medShape,
      userRating: PropTypes.number,
      userNotes: PropTypes.string,
    }

    componentDidMount() {
      const { userRating, userNotes } = this.props;
      this.setState({ userRating });
      this.setState({ userNotes });
    }

    render() {
      const { userRating } = this.state;

      return (
        <form>
        <div className="form-group">
          <input type="number" defaultValue={userRating} className="form-control" id="formGroupExampleInput" placeholder="Rating" onChange={this.changeRatingEvent} required />
        </div>
        <div className="form-group">
           <textarea defaultValue={userRating} className="form-control" id="formGroupExampleInput2" placeholder="Notes" onChange={this.changeAboutEvent} required />
        </div>
        </form>
      );
    }
}

export default MedAboutEditor;

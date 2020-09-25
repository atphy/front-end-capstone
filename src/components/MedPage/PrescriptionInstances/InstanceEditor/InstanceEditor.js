import React from 'react';
import PropTypes from 'prop-types';

import './InstanceEditor.scss';

class InstanceEditor extends React.Component {
  state = {
    dosage: '',
    endDate: '',
    startDate: '',
    userNotes: '',
  }

  static propTypes = {
    addInstance: PropTypes.func.isRequired,
  }

  changeDosageEvent = (e) => {
    e.preventDefault();
    this.setState({ dosage: e.target.value });
  }

  changeEndEvent = (e) => {
    e.preventDefault();
    this.setState({ endDate: e.target.value });
  }

  changeStartEvent = (e) => {
    e.preventDefault();
    this.setState({ startDate: e.target.value });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ userNotes: e.target.value });
  }

  addInstanceEvent = (e) => {
    e.preventDefault();

    const {
      dosage, startDate, endDate, userNotes,
    } = this.state;
    const { addInstance } = this.props;
    const newInstance = {
      dosage,
      startDate,
      endDate,
      userNotes,
    };
    addInstance(newInstance);
  }

  render() {
    return (
        <form>
        <div className="form-group">
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Dose per day" onChange={this.changeDosageEvent} required />
        </div>
        <div className="form-group editor-dates">
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Start date" onChange={this.changeStartEvent} required />
        <p>&nbsp;to&nbsp;</p>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="End date" onChange={this.changeEndEvent} required />
        </div>
        <div className="form-group">
           <textarea className="form-control" id="formGroupExampleInput2" placeholder="Notes about med at this dosage" onChange={this.changeNotesEvent} />
        </div>
        <button type="submit" value="Submit" className="submit-new-instance" onClick={this.addInstanceEvent}><i className="fas fa-check-square"></i></button>
        </form>
    );
  }
}

export default InstanceEditor;

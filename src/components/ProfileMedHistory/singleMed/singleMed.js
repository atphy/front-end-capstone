import React from 'react';

class SingleMed extends React.Component {
  // proptypes needed
  render() {
    const { medication } = this.props;

    return (
        <div className="med-card">
          <p className="single-med-card">{medication}</p>
        </div>
    );
  }
}

export default SingleMed;

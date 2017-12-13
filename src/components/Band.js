import React, { Component } from 'react';

class Band extends Component {
  render() {
    const band = this.props.band.text;

    const handleSubmit = () => {
      this.props.store.dispatch({
        type: 'DELETE_BAND',
        // id: this.props.band.id
        id: this.props.id
      });
    }

    return(
      <div>
        <li>{band}</li>
        <br />
        <button onClick={handleSubmit}>Delete Band</button>
      </div>
    );
  }
};

export default Band;

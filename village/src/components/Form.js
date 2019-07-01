import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      errorMessage: null
    };
  }

  render() {
    const { name, age, height, errorMessage } = this.state

    return (
      <div className="SmurfForm">
        <h2>Add a Smurf</h2>
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={this.props.handleChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="height"
            value={height}
            name="height"
          />
          {this.props.action === 'new' ? '<button type="submit">Add to the village</button>' : null}
          {this.props.action === 'edit' ? '<button type="submit" className="update">Save</button>' : null}
          {this.props.action === 'edit' ? '<button id="deleteBtn" onClick={this.deleteSmurf} className="update">Delete</button>' : null}

        </form>
      </div>
    );
  }
}

export default Form;

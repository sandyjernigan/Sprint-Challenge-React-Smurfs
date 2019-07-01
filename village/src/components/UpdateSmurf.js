import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {},
      id: '',
      name: '',
      age: '',
      height: '',
      errorMessage: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id 
    const smurf = this.props.smurfs.find(i => String(i.id) === id)
      this.setState({ 
        name: smurf.name, 
        age: smurf.age, 
        height: smurf.height });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurf = e => {
    e.preventDefault();
    // update result by id
    const { name, age, height } = this.state
    const payload = { name, age, height }
    const id = this.props.match.params.id 

    axios.put(`http://localhost:3333/smurfs/${id}`, payload)
    .then((response) => {
      this.setState({ errorMessage: null })
      this.props.updateState(response.data)
      this.props.history.push("/smurfs")
    })
    .catch((err) => {
      console.log(err)
      this.setState({ errorMessage: err })
    })
  }

  deleteSmurf = e => {
    e.preventDefault();
    // delete result by id
    const id = this.props.match.params.id 

    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((response) => {
      this.setState({ errorMessage: null })
      this.props.updateState(response.data)
      this.props.history.push("/smurfs")
    })
    .catch((err) => {
      console.log(err)
      this.setState({ errorMessage: err })
    })
  }

  render() {
    const { name, age, height, errorMessage } = this.state

    return (
      <div className="SmurfForm">
        <h2>Edit</h2>
        <form onSubmit={this.updateSmurf}>
          <input
            onChange={this.handleChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <input
            onChange={this.handleChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            onChange={this.handleChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <button type="submit" className="update">Save</button>
          <button id='deleteBtn' onClick={this.deleteSmurf} className="update">Delete</button>
        </form>
        <p>{errorMessage}</p>
      </div>
    );
  }
}

export default SmurfForm;

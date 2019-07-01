import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      errorMessage: null
    };
  }

  addSmurf = event => {
    event.preventDefault();

    // create the smurf using the api
    const { name, age, height } = this.state
    const payload = { name, age, height }

    axios.post("http://localhost:3333/smurfs", payload)
    .then((response) => {
      this.setState({ errorMessage: null })
      this.props.updateState(response.data)
      this.props.history.push("/smurfs")
    })
    .catch((err) => {
      console.log(err)
      this.setState({ errorMessage: err })
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <Form {...this.props} addSmurf={this.addSmurf} action='new'/>
      </div>
    );
  }
}

export default New;

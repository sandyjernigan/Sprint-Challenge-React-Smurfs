import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errMsg: null
    };
  }
  
  componentDidMount() {
    // retrieve an array all the Smurfs in the Smurf DB
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => {
        console.log("Error:", err);
        this.setState({ errMsg: err });
      });
    }

    // Set event name to the value in the form
    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;

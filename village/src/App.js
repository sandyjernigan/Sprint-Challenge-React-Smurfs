import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom";
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

  updateState = (smurfs) => {
    this.setState({ smurfs })
    this.setState(this.state); // may remove when routed.
  }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm updateState={this.updateState} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import './App.css';
import Home from "./components/Home"
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfbyID from './components/SmurfbyID';

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
    const { smurfs } = this.state

    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurfs">Smurfs Village</NavLink>
          <NavLink to="/new-smurf">Add a New Smurf</NavLink>
        </nav>

        <Route path="/" exact render={(props) => <Home {...props} smurfs={smurfs} />} />
        <Route path="/smurfs" exact render={(props) => <Smurfs {...props} smurfs={smurfs} />} />
        <Route path="/smurf/:id" render={(props) => <SmurfbyID {...props} smurfs={smurfs} />} />
        <Route path="/new-smurf" exact render={(props) => <SmurfForm {...props} smurfs={smurfs} updateState={this.updateState} />} />
      </div>
    );
  }
}

export default App;

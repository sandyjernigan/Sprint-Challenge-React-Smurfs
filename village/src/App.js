import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

// import Components
import { Home, Footer, Smurfs, New, SmurfForm, SmurfbyID, UpdateSmurf } from "./components/"

// import style sheets
import './App.css';
import './components/smurfs.css';

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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
        <Route path="/edit-smurf/:id" exact render={(props) => <UpdateSmurf {...props} smurfs={smurfs} updateState={this.updateState} handleChange = {this.handleChange} />} />
        <Route path="/new" exact render={(props) => <New {...props} smurfs={smurfs} updateState={this.updateState}  handleChange = {this.handleChange} />} />
        <Footer />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AddChallenge from './components/AddChallenge';
import AddProgress from './components/AddProgress';
import ApproveProgress from './components/ApproveProgress';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Grid, Header, Segment, Icon } from "semantic-ui-react";
import UserInput from "./components/UserInput";

class App extends Component {
  submittedForm = e => {
    // button click function
    console.log("--- Submit butt is pressed ---");
    e.preventDefault();
    const dataString =
      e.target.elements.inpChallengeName.value +
      "|" +
      e.target.elements.inpEndGoal.value +
      "|" +
      e.target.elements.inpUser.value +
      "|" +
      e.target.elements.inpRules.value;
    console.log("---dataString---");
    console.log(dataString);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul class ="menu">
              <li>
                <button><Link to="/login">Login</Link></button>
              </li>
              <li>
                <button><Link to="/HomePage">Home Page</Link></button>
              </li>
              <li>
                <button><Link to="/AddChallenge">Add Challenge</Link></button>
              </li>
              <li>
                <button><Link to="/AddProgress">Add Progress</Link></button>
              </li>
              <li>
                <button><Link to="/ApproveProgress">Approve Progress</Link></button>
              </li>
            </ul>
            <hr />
            <Route path="/login" component={Login} />
            <Route path="/HomePage" component={HomePage} />
            <Route path="/AddChallenge" component={AddChallenge} />
            <Route path="/AddProgress" component={AddProgress} />
            <Route path="/ApproveProgress" component={ApproveProgress} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

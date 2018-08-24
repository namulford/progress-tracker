
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AddChallenge from './components/AddChallenge';
import AddProgress from './components/AddProgress';
import ApproveProgress from './components/ApproveProgress';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Grid, Header, Segment, Icon, Button } from "semantic-ui-react";
import UserInput from "./components/UserInput";

class App extends Component {
  submittedForm = e => {
    // button click function
    console.log("--- Submit button is pressed ---");
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
            <Button.Group size="large">
              <Link to="/login"> 
                <Button color='red'>
                  Login
                </Button>
              </Link>
              <Link to="/HomePage">
                <Button color='orange'>
                  Homepage
                </Button>
              </Link>
              <Link to="/AddChallenge">
                <Button color='yellow'>
                  Add Challenge
                </Button>
              </Link>
              <Link to="/AddProgress">
                <Button color='green'>
                  Add Progress
                </Button>
              </Link>
              <Link to="/ApproveProgress">
                <Button color='blue'>
                  Approve Progress
                </Button>
              </Link>
            </Button.Group>
            <hr />
            <Route path="/login" component={Login} />
            <Route path="/HomePage" component={HomePage} />
            <Route path="/AddChallenge" component={AddChallenge} />
            <Route path="/AddProgress" component={AddProgress} />
            <Route path="/ApproveProgress" component={ApproveProgress} />
          </div>
        </Router>
        <div>
          <Header as="h2" attached="top" color="pink">
            <Header.Content>
             Progress Tracker
            <Header.Subheader>
              This is an exciting new progress tracker, customizable just for you!
            </Header.Subheader>
            </Header.Content>
          </Header>
        </div>

        <UserInput submittedForm={this.submittedForm} />
      </div>
    );
  }
}

export default App;

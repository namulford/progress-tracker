import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Project Tracker</h1>
        </header>
        <p> There is an exciting tracker app!</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
import React, { Component } from "react";
import "./App.css";
import { Container, Grid, Header, Segment, Icon } from "semantic-ui-react";
import UserInput from "./Components/UserInput";

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
        <div>
          <Header align="left" as="h2" attached="top" color="olive" block>
          <Icon name="tasks" />
            <Header.Content>
             ProgeTracca
            <Header.Subheader>
              There is an exciting tracker app
            </Header.Subheader>
            </Header.Content>
          </Header>

          <Segment align="left" attached>
            This incredible app was created to pull of you lazy butt from the coach
             and kick you make a great performance,
             like to beat the World record in coach side-to-side rolling
          </Segment>
        </div>



        <UserInput submittedForm={this.submittedForm} />
>>>>>>> SaveTheChallengeForm
      </div>
    );
  }
}

export default App;

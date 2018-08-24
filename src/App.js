
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AddChallenge from './components/AddChallenge';
import AddProgress from './components/AddProgress';
import ApproveProgress from './components/ApproveProgress';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/HomePage">HomePage</Link>
              </li>
              <li>
                <Link to="/AddChallenge">AddChallenge</Link>
              </li>
              <li>
                <Link to="/AddProgress">AddProgress</Link>
              </li>
              <li>
                <Link to="/ApproveProgress">ApproveProgress</Link>
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
      </div>
    );
  }
}

export default App;

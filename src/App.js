import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';

class App extends Component {

  submittedForm = e => {
      console.log('--- Submit butt is pressed ---');
      e.preventDefault();
      const dataString = e.target.elements.inpChallengeName.value +"|"+e.target.elements.inpEndGoal.value+"|"+e.target.elements.inpUser.value+"|"+e.target.elements.inpRules.value;
      console.log("---dataString---");
      console.log(dataString);
    }





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
        <UserInput submittedForm={this.submittedForm}/>

      </div>
    );
  }
}

export default App;

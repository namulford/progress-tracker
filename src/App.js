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
      </div>
    );
  }
}

export default App;

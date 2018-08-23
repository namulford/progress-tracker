import React, { Component } from "react";
import "./App.css";
import { Container, Header, Segment, Icon } from "semantic-ui-react";
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
          <Icon name="star" />
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

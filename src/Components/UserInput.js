import React from "react";
import { Button, Input, Form } from "semantic-ui-react";

const UserInput = props => {
  return (
    <Form>
      <Form.Group widths="equal" onSubmit={props.Trallala}>
        <Form.Input
          style={{ margin: "20px 10px" }}
          placeholder="Name of the challenge"
          type="text"
          name="inpChallengeName"

        />

        <Form.Input
          style={{ margin: "20px 10px" }}
          placeholder="End Goal / End Date"
          type="text"
          name="inpEndGoal"
        />

        <Form.Input
          style={{ margin: "20px 10px" }}
          placeholder="Enter User Name"
          type="text"
          name="inpUser"
        />
      </Form.Group>
      <Form.TextArea style={{ aligh: "left", width: "32%"}} name="inpRules" placeholder="Special Instructions" />
      <Button color="olive">Submit</Button>
    </Form>
  );
};

export default UserInput;

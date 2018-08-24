import React from "react";
import { Button, Divider, Input, Form } from "semantic-ui-react";

const UserInput = props => {
  return (
    <Form onSubmit={props.submittedForm}>
      <Form.Group>
        <Form.Input
          style={{ margin: "20px 10px", width: "200px" }}
          placeholder="Challenge Name"
          type="text"
          name="inpChallengeName"
        />

        <Form.Input
          style={{ margin: "20px 10px", width: "200px" }}
          placeholder="End Goal / End Date"
          type="text"
          name="inpEndGoal"
        />

        <Form.Input
          style={{ margin: "20px 10px", width: "200px" }}
          placeholder="Enter User Name"
          type="text"
          name="inpUser"
        />
        <Form.TextArea
          style={{ margin: "20px 10px", width: "200px" }}
          name="inpRules"
          placeholder="Special Instructions"
        />
      </Form.Group>
        <Divider />

      <Button color="olive">Submit</Button>
    </Form>
  );
};

export default UserInput;

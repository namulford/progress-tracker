import React from 'react';
import { Container, Grid, Header, Segment, Icon } from "semantic-ui-react";

const HomePage = () => {
  return (
    <div>
    < h1> HOMEPAGE </h1>

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
  )

}


export default HomePage;

import React from 'react';
import { Responsive,Container, Header, Button,Icon, Segment, Grid, Image, Menu } from 'semantic-ui-react';

const Mentor = () => (
    <>
    <Container text id="about">
        <Header as = 'h1' content = "Become a Mentor to our awesome community"    style={{
        fontSize: null ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: null ? '1.5em' : '3em',
      }}></Header>
    <Header
      as='h2'
      content='Learn, Teach and Grow with the community'
      style={{
        fontSize: null ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: null ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Signup as Mentor
      <Icon name='right arrow' />
    </Button>
    </Container>
    </>
);

export default Mentor;
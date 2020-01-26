import React from 'react';
import { Responsive,Container, Header, Button,Icon, Segment, Grid, Image, Menu } from 'semantic-ui-react';

const Mentor = () => (
    <>
    <Container text id="about">
        <Header as = 'h1' content = "We Learn better by Teaching Not by just Learning"    style={{
        fontSize: null ? '2em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: null ? '1.5em' : '1em',
      }}></Header>
    <Header
      as='h2'
      content='Join our Mentor community'
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
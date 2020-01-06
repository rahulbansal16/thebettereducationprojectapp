import React from 'react';
import { Responsive,Container, Header, Button,Icon, Segment, Grid, Image } from 'semantic-ui-react'

// const ResponsiveContainer = ({ children }) => (
//     <div>
//       <DesktopContainer>{children}</DesktopContainer>
//       <MobileContainer>{children}</MobileContainer>
//     </div>
//   )
  
//   ResponsiveContainer.propTypes = {
//     children: PropTypes.node,
//   }
  

const About = () => (
    <div>
    <Container text id="about" style = {{ height:'100vh'}}>
        <Header as = 'h1' content = "Learn Computer Science through discussions"    style={{
        fontSize: null ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: null ? '1.5em' : '3em',
      }}></Header>
    <Header
      as='h2'
      content='We learn best in groups and through discussions'
      style={{
        fontSize: null ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: null ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Take a Demo Class
      <Icon name='right arrow' />
    </Button>
    </Container>
    <Responsive>
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container >
            <Grid.Row>
                <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>              
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/code.jpg' />
          </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    </Responsive>
    </div>
);

export default About;
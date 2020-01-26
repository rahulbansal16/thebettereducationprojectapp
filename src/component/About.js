import React from 'react';
import { Responsive,Container, Header, Button,Icon, Segment, Grid, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import URLBarContainer from './URLBar';
import How from './How';

// const ResponsiveContainer = ({ children }) => (
//     <div>
//       <DesktopContainer>{children}</DesktopContainer>
//       <MobileContainer>{children}</MobileContainer>
//     </div>
//   )
  
//   ResponsiveContainer.propTypes = {
//     children: PropTypes.node,
//   }
  
const handleClick = () => {
  // let path  = "/class";
  // let history = useHistory();
}

const About = (props) => (
    <div>
    <Container text id="about">

        <Header as = 'h1' content = "Learn Computer Science through discussions with peers"  style={{
        fontSize: null ? '2em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: null ? '1.5em' : '2em',
      }}></Header>
    {/* <Header
      as='h2'
      content='We learn best in groups and through discussions'
      style={{
        fontSize: null ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: null ? '0.5em' : '1.5em',
      }}
    /> */}
    {/* <Button primary size='huge' onClick={handleClick}>
      Take a Demo Class
      <Icon name='right arrow' />
    </Button> */}
    <URLBarContainer isLoggedIn='true'/>

    </Container>
    <How></How>

    {/* <Responsive>
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
    </Responsive> */}
    </div>
);

export default withRouter(About);
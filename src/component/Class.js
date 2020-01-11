import React from 'react'
import { Embed, Container, Header, Grid, Rail } from 'semantic-ui-react'

const EmbedExampleYouTube = () => (
  <Embed
    id='O6Xo21L0ybE'
    placeholder='/images/image-16by9.png'
    source='youtube'
  />
)

class Class extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: 'O6Xo21L0ybE'
    }
  }

  render(){
    const {id}  = this.state;
    return (
      <>
        <Container>
        <ClassStatus/> 
          <Grid divided columns={2}>
            <Grid.Column width={12}>
                {/* <p>left Rail</p> */}
                <Embed id = {id} source = "youtube"/>
          </Grid.Column>
          <Grid.Column width={4}>
            <p>Check this out</p>
          </Grid.Column>
          </Grid>
        </Container>
      </>
    );
  }
};


const ClassStatus = (props) => {
  return (
    <Header as = 'h1' content = "Learn Computer Science through discussions"    style={{
    fontSize: null ? '2em' : '4em',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: null ? '1.5em' : '3em',
  }}></Header>  
  );
};

export default Class;
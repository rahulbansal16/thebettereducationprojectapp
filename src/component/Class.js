import React from 'react'
import { Embed, Container, Header, Grid, Rail, Button,Card, Icon, Segment } from 'semantic-ui-react'
// import vynch form './MyCircle.js';
import {showDiv} from './MyCircle';
import axios from 'axios';

const linkToCircleId = {
  bridgeproblem:'3384-842-572',
  bridgeproblemsolution:'224-352-1934',
  graphterminology:'32-8494-6672',
  adjlist:'3161-30-3928',
  adjmatrix:'1166-231-904',
  complexity:'2530-7614-00',
  question:'1053-11-2555',
  bfsanddfs:'20-902280-58'
}

class Class extends React.Component {

  constructor(props){
    super(props);
    this.video = React.createRef();
    this.link = this.props.match.url;
    this.videoId = '13-23362-480';
    this.state = {
      id: 'O6Xo21L0ybE',
      showDefaultMessage:false
    }
  }

  fetchTheCircleId = (link) => {
    let links = link.split("/")
    let circleId = linkToCircleId[links[2]]
    return circleId;
    // return linkToCircleId[link]
  }

  isCallToServerRequired = (link) => {
    let circleId = this.fetchTheCircleId(link);
    if (circleId === undefined){
      return true;
    }
    return false;
  }

  componentDidMount(){
    var prms; 
    if (!this.isCallToServerRequired(this.link)){
      prms = Promise.resolve({mycircleid: this.fetchTheCircleId(this.link)});
    } else {
      prms = axios.get('https://t865tul3o8.execute-api.ap-south-1.amazonaws.com/prod/class', { params: { 'link': this.link } })
    }
    prms.then(res => {
        if (res != null){
          this.videoId = res.mycircleid;
          if (this.videoId === null){
            this.setState({showDefaultMessage:true})
          }
          else{
            showDiv(this.video,this.videoId);
          }
        }
    }).catch( err => {
      console.error("Error resolving the link to the video url",err);
      showDiv(this.video,this.videoId);
      // this.setState({showDefaultMessage:true})
    });
  }

  renderVideo = () => {
    // console.log(this.props.match.params);
    return(
      <>
      <h1>Yes this heading is going to be displayed</h1>
      <div ref={this.video} style={{marginLeft:'0px', display:'flex', width:'100%', height:'auto', justifyContent:'center', alignItems:'center'}}></div> 
      </>
    );
  }

  showDefaultMessageContainer = () => {
    return (
      <>
      <Container>
        <Header as = 'h1' content = "Thanks for your patience" textAlign="center" style={{
        fontSize: null ? '2em' : '2em',
        fontWeight: 'normal',
        color:'red',
        marginBottom: 0,
        marginTop: null ? '1.5em' : '2em',
      }}></Header>
      
        <Header as = 'h1' textAlign="center" content = "Your class is not ready yet. We will inform you once it is ready."  style={{
        fontSize: null ? '2em' : '2em',
        fontWeight: 'normal',
        marginBottom: 0,
        color:'red',
        marginTop: null ? '1.5em' : '1.5em',
      }}></Header>
      </Container>
      </>
    );
  }

  render(){
    const {id}  = this.state;
    return (
      <>
        <Container fluid style={{marginTop:'50px',padding:'0px 50px 0px 50px', height:'100vh'}}>
          <Grid divided columns={2} textAlign="right">
          <Grid.Row style={{height:'100%'}}>
            <Grid.Column width={12} style={{ height:'100%'}}>
                <ClassStatus/> 
                {/* <Route path={`/class/:classId`} componentDidMount={this.renderVideo()}/> */}
                {
                  !this.state.showDefaultMessage?
                  <Header as = "h1" content = "Class First - Intro to Graphs" textAlign="center"></Header>:
                  <></>

                }
                <div ref={this.video} style={{marginLeft:'0px', display:'flex', width:'100%', height:'auto', justifyContent:'center', alignItems:'center'}}></div>
                {
                  this.state.showDefaultMessage?
                  this.showDefaultMessageContainer()
                  :<></>
                }
            </Grid.Column>
            <Grid.Column textAlign = "left" width={4}>
              <SubtitlesHelper></SubtitlesHelper>
              <Questions></Questions>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          {/* <AudioLink/> */}
        </Container>
      </>
    );
  }
};

const Questions = () => {
  return (
    <>
      <Header as="h2" content="Questions to ponder about"></Header>
      <Segment.Group style={{overflow:'auto', maxHeight:'100%', padding:'10px'}}>
        {/* <Segment.Group vertical style={{padding:'5px'}}> */}
        <Card style={{
          width:'100%'
        }}
    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />

<Card style={{
          width:'100%'
        }}    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />
    <Card style={{
          width:'100%'
        }}    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />  
    <Card style={{
          width:'100%'
        }}    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />
    <Card style={{
          width:'100%'
        }}    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />
    <Card style={{
          width:'100%'
        }}    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />
        </Segment.Group>
      {/* </Segment> */}
    </>
  );
}

const ClassStatus = (props) => {
  return (
    <Header as = 'h3' content = "The Live Class will start on 26th Sunday 4:00 pm IST" textAlign = 'center'   style={{
    fontSize: null ? '1.5em' : '2em',
    fontWeight: 'normal',
    marginTop: null ? '1.5em' : '0.6em',
    marginBottom: null ? '1.5em' : '0.6em',
  }}></Header>  
  );
};

const joinDisordChannel = () => {
  window.open('https://discord.gg/82rB9ut');
};

const SubtitlesHelper = () => {
  return (
    <>
      <Container >
        <Header   as = "h3" content = "Join the audio channel of the class"></Header>
        <Button style = {{ color:'#fff', backgroundColor:'#7289dA' }} onClick = {joinDisordChannel}>
          <Icon name='discord' /> Discord
        </Button>
      </Container>       
    </>
  );
};

export default Class;
import React from 'react';
import{ Header,Icon, Segment, Grid, Responsive} from 'semantic-ui-react'

const How = () => {
    return (
        <>
        <Responsive>
        <Segment style={{minheight:'100vh'}}>
        <Header as = "h1" content="How does it works?" style={{marginTop:'20px',marginBottom:'30px'}}></Header>
        <Grid container style = {{display:'flex', justifyContent:'center', alignItems:'center'}} textAlign="center">
            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>
                <Grid.Column computer={5} mobile={16}>
                    <DisplayBanner heading="Submit Youtube PlayList Link" content="Choose a course that you want to learn along with your friends and submit the link" ></DisplayBanner>
                </Grid.Column>
                <Grid.Column width='1' only="computer">
                    <Number text='1'/>
                </Grid.Column>
                <Grid.Column width='5' only="computer">
                    <Icon color="#2185d0" name="youtube" size="massive"/>
                    {/* <Image src={youtube} size="medium" /> */}
                </Grid.Column>                
            </Grid.Row>

            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>
                <Grid.Column width='5' only="computer">
                    <Icon name="share alternate" size="massive"></Icon>
                </Grid.Column>
                <Grid.Column only="computer">
                    <Number text='2'/>
                </Grid.Column>
                <Grid.Column computer={5} mobile={16}>
                    <DisplayBanner heading="Invite Friends" content="Share the generated link with your friends to invite them to the course" ></DisplayBanner>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>
            <Grid.Column computer={5} mobile={16}>
                    <DisplayBanner heading="Schedule the Course" content="Pick a time that works well for and your friends" ></DisplayBanner>
                </Grid.Column>
                <Grid.Column only="computer">
                    <Number text='3'/>
                </Grid.Column>
                <Grid.Column width='5' only="computer">
                    <Icon name="clock" size ="massive"></Icon>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>
                <Grid.Column width='5' only="computer">
                    <Icon name="discussions"  size="massive"/>
                </Grid.Column>
                <Grid.Column only="computer">
                    <Number text='4'/>  
                </Grid.Column>
                <Grid.Column computer={5} mobile={16}>
                    <DisplayBanner heading="Discuss and Learn" content="Discuss in realtime with your friends to have a class like experience" ></DisplayBanner>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>
            <Grid.Column computer={5} mobile={16}>
                    <DisplayBanner heading="Be a Mentor in a live course" content="Become a mentor and help your students succeed and deepen your understanding" ></DisplayBanner>
                </Grid.Column>
                <Grid.Column only="computer">
                    <Number text='5'/>
                </Grid.Column>
                <Grid.Column width='5' only="computer">
                    <Icon name="handshake" size ="massive"></Icon>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
        </Responsive>
        </>
    );
}

const DisplayBanner = (props) => {
    return <div style = {{
        textAlign:'left'
    }}>
        {/* <Header as = 'h2' content = {props.heading} textAlign="center" only="mobile"></Header> */}
        <Header as = 'h2' content = {props.heading} only="computer"></Header>
        <p>{props.content}</p>
    </div>;
}

const Number = (props) => {
    return <>
        <div style={{
             fontWeight:'bold',
             height: '40px',
             width: '40px',
             backgroundColor: '#bbb',
             borderRadius: '50%',
             textAlign:'center',
             verticalAlign:'middle',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
        }}>
            {props.text}
        </div>
    </>;
}

export default How;
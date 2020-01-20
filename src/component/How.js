import React from 'react';
import{ Header,Icon, Segment, Grid} from 'semantic-ui-react'

const How = () => {
    return (
        <>
        {/* <image src={youtube}/> */}
        <Segment style={{height:'100vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Grid style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>

                <Grid.Column width='5'>
                    <DisplayBanner heading="Submit Youtube PlayList Link" content="Choose a course that you want to learn along with your friends and submit the link" ></DisplayBanner>
                </Grid.Column>

                <Grid.Column width='1'>
                    <Number text='1'/>
                </Grid.Column>

                <Grid.Column width='5'>
                    <Icon name="youtube" size="massive"/>
                    {/* <Image src={youtube} size="medium" /> */}
                </Grid.Column>                
                
            </Grid.Row>

            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>
            <Grid.Column width='5'>
                </Grid.Column>
                    <Icon name="share alternate" size="massive"></Icon>
                <Grid.Column>
                    <Number text='2'/>
                </Grid.Column>

                <Grid.Column width='5'>
                    <DisplayBanner heading="Invite Friends" content="Share the generated link with your friends to invite them to the course" ></DisplayBanner>
                </Grid.Column>

            </Grid.Row>

            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>

            <Grid.Column width='5'>
                    <DisplayBanner heading="Schedule the Course" content="Pick a time that works well for and your friends" ></DisplayBanner>
                </Grid.Column>

                <Grid.Column>
                    <Number text='3'/>
                </Grid.Column>

                <Grid.Column width='5'>
                    <Icon name="clock" size ="massive"></Icon>
                </Grid.Column>

            </Grid.Row>

            <Grid.Row style = {{display:'flex', justifyContent:'middle', alignItems:'center', marginBottom:'50px'}}>

            <Grid.Column width='5'>
                </Grid.Column>
                    <Icon name="discussions"  size="massive"/>
                <Grid.Column>
                    <Number text='4'/>  
                </Grid.Column>

                <Grid.Column width='5'>
                    <DisplayBanner heading="Discuss and Learn" content="Discuss in realtime with your friends to have a class like experience" ></DisplayBanner>
                </Grid.Column>

            </Grid.Row>
        </Grid>
        </Segment>
        </>
    );
}

const DisplayBanner = (props) => {
    return <div style = {{
        textAlign:'left'
    }}>
        <Header as = 'h2' content = {props.heading}></Header>
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
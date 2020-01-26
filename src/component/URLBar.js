import React from 'react';
import{ Header,Icon, Segment, Grid, Responsive,Form,Input, Button, GridRow, Message, Popup } from 'semantic-ui-react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Class from './Class';

export class URLBarContainer extends React.Component {

   static getEmailFromLocalStorage = () =>{
        var user = localStorage.getItem("user");
        if (user === null){
          return null;
        }
        return JSON.parse(user)["email"];
      }

    constructor(props){
        super(props);
        this.isLoggedIn = false;
        this.email = "";
        var user = localStorage.getItem("user");
        if ( user === null){
        }
        else {
            this.email = JSON.parse(user)["email"];
            this.isLoggedIn = true;
        }
        this.url = "";
        this.link = "";
        this.state = {
            url:'',
            email:'',
            showEmailBox:false,
            link:'',
            showURLBox:true,
            showShareLink:false
        }
    }

    createCollaborativeClass = (classObject) => {
        axios.post(`https://t865tul3o8.execute-api.ap-south-1.amazonaws.com/prod/class`, { 
            // email:classObject.email, url:classObject.url, link:classObject.link 
            ...classObject
        })
        .then(res => {
          console.log(res);
          console.log("The call to the class post is successful");
          console.log(res.data);
        }).catch(err =>{
          console.error("Oops failed to make a request to the class");
          console.error(err);
        });
    }

    handleChange = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <>
                <Grid container style={{marginTop:'50px', height:'180px',marginBottom:'50px'}}>
                    <Form style = {{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                        { this.state.showURLBox ?  ( this.isLoggedIn ? <URLBar text="Create Class" onClick={this.submit} value={this.state.url} handleChange={this.handleChange}/> : <URLBar icon text="Next" onClick = {this.next} value = {this.state.url} handleChange={this.handleChange}/>) : (<></>) }
                        {this.state.showEmailBox ? <EmailBox text="Submit" onClick={this.submit} handleChange={this.handleChange}/> : <></>}
                        {this.state.showShareLink?this.ShareLink():<></>}
                    </Form>
                </Grid>
            </>
        );
    }

    handleChange = (e,{name,value}) => {
        if (name==="url"){
            this.url = value;
        }
        if (name==="link"){
            this.link = value;
        }
        if (name==="email"){
            this.email = value;
        }
        // this.name = value;
        // this.setState(
            // {name:value}
        // )
    }

    submit = (e) => {
        console.log("The Submit Button Clicked",e);
        this.link = 'https://thebettereducationproject.org/class/' + Math.random().toString(36).slice(-7);
        this.createCollaborativeClass({'url':this.url,'email':this.email,'link':this.link});
        this.setState({showShareLink:true,showEmailBox:false,showURLBox:false})
        // Once I got at this point, I will have to store the user data
    }

    next = (e) => {
        this.setState(
            {
                showURLBox:false,
                showEmailBox:true,
                // url:value
            }
        )
    }

    ShareLink = () => {
        return <>
        {/* <Popup open={this.state.showShareLink}>
            <Popup.Header>Info about</Popup.Header>
            <Popup.Content> */}
            <Message alignItems="center" size="massive" icon>
                <Message.Content>
                    <Message.Header>Invite people to the class <Icon name="share"/></Message.Header>
                    <div onClick={selectAll}> 
                        {/* <Link to ={'/class'+this.link} component={Class}> */}
                            {this.link}
                        {/* </Link> */}
                    </div>
                </Message.Content>
            </Message>
        </>;
    }

}

// const URLBar = (props) => {
//     return <>
//         <Grid container style={{marginTop:'50px'}}>
//             <Form style = {{display:'flex', flexDirection:'column', justifyContent:'center'}}>
//                 <Header as = 'h2' content = "Paste the Youtube Video Link you want to Learn with your friends" ></Header>
//                 <Input style={{width:'300px'}} placeholder="Youtube URL"></Input>
//                 { !props.isLoggedIn ? <Input style = {{width:'300px'}} type="email" placeholder="Enter Email for getting link"/>: <></>}
//                 <Button style ={{width:'300px'}} primary type="submit">Create Class</Button>
//              </Form>
//         </Grid>
//     </>;
// };


const EmailBox = (props) => {
    return <>
            <Header as = 'h2' content = "Enter your Email to get notifed once the class is ready" ></Header>
            <Input type="email" name="email" onChange={props.handleChange} placeholder="Email" style = {{width:'300px'}}/>
            <Button primary onClick = {props.onClick} type="submit" style ={{width:'300px',marginTop:'20px'}}>{props.text}</Button>
            {/* </Form> */}
        {/* </Grid> */}
    </>;
};

const URLBar = (props) => {
    return <>
        {/* <Grid container> */}
            {/* <Form> */}
                <Header as = 'h2' content = "Paste the Youtube Video Link you want to Learn with your friends" ></Header>
                <Input placeholder="Youtube URL" name="url" onChange={props.handleChange}style = {{width:'300px'}}></Input>
                <Button primary onClick={props.onClick} style ={{width:'300px',marginTop:'20px'}}>{props.text}
                    {props.icon ? <Icon name='right arrow' />: <></> }
                </Button>
            {/* </Form> */}
        {/* </Grid> */}
    </>;
};

const selectAll = (e) => {
    let range = document.createRange();
    range.selectNodeContents(e.target);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    console.log(e.target);
}



export default URLBarContainer;
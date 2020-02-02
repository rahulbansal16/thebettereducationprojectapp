import React from 'react';
import {Modal,Form,Label,Input,Button,Header,Message} from 'semantic-ui-react';
import axios from 'axios';

class AssignmentSubmit extends React.Component {

    static getEmailFromLocalStorage = () =>{
        var user = localStorage.getItem("user");
        if (user === null){
          return null;
        }
        return JSON.parse(user)["email"];
    }

    isLoggedIn(){
        var user = localStorage.getItem("user");
        if (user === null){
          return false;
        }
        this.user = JSON.parse(user);
        return true;
    }

    constructor(props){
        super(props);
        this.user = {};
        this.topic = this.props.topic;
        this.state = {
            isLoggedIn:this.isLoggedIn(),
            open:this.props.open,
            openLoginModal:true,
            youtubeUrl:"",
            githubUrl:"",
            error:true,
            success:false,
            // msg:"",
        }
    }

    handleChange = (e,{name,value}) => {
        if (name==="youtubeUrl"){
            this.setState({
                youtubeUrl:value
            })
            this.youtubeUrl = value;
        }
        if (name==="githubUrl"){
            this.setState({
                githubUrl:value
            });
            // this.githubLink = value;
        }
    }

    openModal = () => {
        this.setState({
            open:true
        })
    }

    closeModal = () => {
        this.setState({
            open:false
        })
        this.props.callback();
    }

    componentDidMount(){
    }

    // Make the api call for submitting the assignment

    makeApiCall = (classObject) => {

        axios.post(`https://t865tul3o8.execute-api.ap-south-1.amazonaws.com/prod/assignment`, { 
            // email:classObject.email, url:classObject.url, link:classObject.link 
            // email,"", youtubeLink:"", githubLink:""
            ...classObject
        })
        .then(res => {
          console.log(res);
          console.log("The call to the class post is successful");
          console.log(res.data);
          this.setState({
              success:true
          })
        }).catch(err =>{
          console.error("Oops failed to make a request to the class");
          console.error(err);
          this.setState({
              error:true
          })
        });

    }

    submitTheAssignment = () => {

        if ( !this.isUrlValid(this.state.githubUrl)){
                this.setState(
                    {
                        githubUrl:"",
                        error:true
                    }
                )
                return;
        }

        if (!this.isUrlValid(this.state.youtubeUrl)){
            this.setState({
                youtubeUrl:"",
                error:true
            });
            return;
        }

        this.makeApiCall({
            youtubeUrl: this.state.youtubeUrl,
            assignmentId:this.props.topic.id,
            githubUrl: this.state.githubUrl,
            email: this.user["email"]
        });
        
    }

    isUrlValid = (str) => {
        var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
      }

    closeLoginModal = () => {
        this.setState({
            openLoginModal:false
        })
        this.state.openLoginModal = true;
    }

    getLoginModal = () => {

        return (
            <Modal open={this.state.openLoginModal && !this.isLoggedIn()} size="small" onClose={this.closeLoginModal}>
                <Modal.Header>Please Login </Modal.Header>
                <Modal.Content>
                    <Header>Login using your Google Account to submit the assignment.</Header>
                </Modal.Content>
            </Modal>
        );
    }

    getAssignmentSubmitModal = () => {
        return (
            <>
                <Modal open={this.state.open && this.isLoggedIn()} onClose={this.closeModal} size="small">
                    <Modal.Header>
                    <Header as="h1" content = "Submit Your Assignments">
                       Submit your Assignments for  {this.props.topic.name}
                    </Header>   
                    </Modal.Header>
                    <Modal.Content>
                        <Form success={this.state.success} failure={this.state.error}>
                            <Header>Make sure to explain every point that was covered in class</Header>
                            <Form.Field>
                                <Label>Paste link to your youtube video</Label>
                                <Input name="youtubeUrl" type="url" placeholder="Youtube Link" onChange={this.handleChange} value={this.youtubeUrl}></Input>
                            </Form.Field> 

                            <Header>Create a pull request and submit the url below</Header>
                            <Form.Field>
                                <Label>Paste the link of your Git hub Pull Request</Label>
                                <Input name="githubUrl" type="url" placeholder="Github Pull Request" onChange={this.handleChange} value={this.githubUrl}></Input>
                            </Form.Field>
                            <Button primary type='submit' onClick={this.submitTheAssignment}>Submit</Button>
                            <Message success header='Success submittin your form' content="Your assignment is submitted successfully."/>
                            <Message error header='Error submitting your form' content="There is an error submitting your form. Please try again later after some time."/>
                        </Form>
                    </Modal.Content>
                </Modal>
            </>
        );
    }



    render () {
        return (
            <>
                {this.getLoginModal()}
                {this.getAssignmentSubmitModal()}
            </>
        );
    }
}

export default AssignmentSubmit;

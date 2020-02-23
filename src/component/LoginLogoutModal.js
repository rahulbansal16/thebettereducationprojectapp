import React from 'react'
import {Header, Image, Modal } from 'semantic-ui-react'
import code from '../images/code.jpg';
import SocialButton from './SocialButton';
import axios from 'axios';

class LoginLogoutModal extends React.Component {

  constructor(props){
    super(props);
    this.nodes = {};
  }

  sendUserInfo = (user) => {
    axios.post(`https://t865tul3o8.execute-api.ap-south-1.amazonaws.com/prod/users`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(err =>{
      console.error(err);
    });
  }
  handleSocialLogin = (user, err) => {
    var authenticatedUser = user._profile;
    localStorage.setItem('user', JSON.stringify(authenticatedUser));
    this.setState({isLoggedIn:true});
    console.log(localStorage.getItem('user'));
    this.sendUserInfo(user);
  }

  setNodeRef = (provider, node) => {
    if (node) {
      this.nodes[ provider ] = node
    }
  }
  
  handleSocialLoginFailure = (e) => {
    console.log("Login Failed",e);
  }

  render(){
    return(
        <Modal open={this.props.isOpen} closeOnDocumentClick closeOnEscape closeOnDimmerClick closeOnPortalMouseLeave closeIcon
        onClose = {this.props.handleClose}>
        {/* <Modal.Header textAlign="justified">Login Using the Google Account</Modal.Header> */}
        <Modal.Content image>
          <Image wrapped size='medium' src={code} />
          <Modal.Description style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <Header textAlign="center">Login to TheBetterEducationProject</Header>
            <SocialButton
                        // debug
                        provider='google'
                        appId='402641560768-86dk8cskulohe6a9fleer4uuudk1fl34.apps.googleusercontent.com'
                        onLoginSuccess={this.handleSocialLogin}
                        onLoginFailure={this.handleSocialLoginFailure}
                        getInstance={this.setNodeRef.bind(this, 'google')}
                      >
                        Login with Google
                      </SocialButton>
            {/* <p>You agree</p> */}
            <p>By using this website, you agree to these terms and privacy policy.</p>
          </Modal.Description>
        </Modal.Content>
        </Modal>
      );
  }

}

export default LoginLogoutModal
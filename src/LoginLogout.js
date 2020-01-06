import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import isUserLoggedIn from './utility/Utility';

const ModalModalExample = () => (
  <Modal open={true} size={"small"}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

// The modal decides which one to be shown based upon the 
// It can be Login or Logout, I have to decide which one is to be shown based on a variable
class LoginLogout extends React.Component {

    constructor(props){
    }

    render(){
        return(
            <div>
              <Modal open = {this.props.showModal}>
                {
                  isUserLoggedIn() ?
                  <GoogleLogout
                    clientId="402641560768-86dk8cskulohe6a9fleer4uuudk1fl34.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.responseGoogle}
                    onFailure = {this.responseGoogle}
                  />
                  :
                  <GoogleLogin clientId="402641560768-86dk8cskulohe6a9fleer4uuudk1fl34.apps.googleusercontent.com" buttonText="Login" 
                    onSuccess={this.responseGoogle}
                    onFailure={()=>{}} cookiePolicy={'single_host_origin'}
                  />
                }
              </Modal>
            </div>
        );
    }

}

// export default LoginLogout

export default ModalModalExample

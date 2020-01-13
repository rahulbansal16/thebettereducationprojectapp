import React from 'react';
import code from './images/code.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Menu, Container} from 'semantic-ui-react';
import LoginLogoutModal from './component/LoginLogoutModal';
import About from './component/About';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Mentor from './component/Mentor';
import EmbedExampleYouTube from './component/Class';
import CourseContent from './component/CourseContent';
import SocialButton from './component/SocialButton';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isInClass:null,
      summaryText:'',
      open:false,
      isLoggedIn: this.isLoggedIn(),
      activeItem:"About",
      user:{},
      currentProvider:'',
      openLoginModal: false
    };
    this.nodes = {};
    this.showPopUp = this.showPopUp.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loginLogoutCallback = this.loginLogoutCallback.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  joinTheClass(){
    console.log("Joining the Class");
  }

  leaveTheClass(){
    console.log("Leaving the class");
  }

  isLoggedIn(){
    var user = localStorage.getItem("user");
    if (user === null){
      return false;
    }
    return true;
  }

  isInClass(){
    return true;
  }

  showPopUp(){
    this.setState({
      open:true
    })
  }

  loginLogoutCallback() {
    this.setState({
      isLoggedIn: this.isLoggedIn(),
      open:false
    })
  }

  toggleSignInSignOut(){
    // This method will be called from the Header Component on click
    // and based on this, I have to decide if pop ups needs to be shown or not
  }

  closeModal(){
    this.setState({
      open:false
    })
  }

  handleItemClick = (e, { name }) => {
    console.log("Logging the value of the handleItemClick",e,name);
    this.setState({ activeItem: name });
  }

  toogleLoginLogout = (e) => {
    // this.setState({openLoginModal:true});
  }

  handleSocialLogin = (user, err) => {
    var authenticatedUser = user._profile;
    localStorage.setItem('user', JSON.stringify(authenticatedUser));
    this.setState({isLoggedIn:true});
    console.log(localStorage.getItem('user'));
  }

  handleSocialLoginFailure = (e) => {
    console.log("Login Failed",e);
  }

  handleClose = () => {
    this.setState({openLoginModal:false});
  }

  setNodeRef = (provider, node) => {
    if (node) {
      this.nodes[ provider ] = node
    }
  }

  logout = () => {
    const { logged, currentProvider } = this.state

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout()
    }
    localStorage.removeItem('user');
    this.setState({isLoggedIn:false});
  }

  sendUserInfo = (user) => {
    axios.post();
  }

  render(){
    const { activeItem } = this.state
    return <div className="App">
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
      {/* <Button id="customBtn">Yo</Button> */}
      <Router>
            <Container>
              <Menu pointing secondary size="massive">
                <Menu.Item
                  name='About'
                  active={ activeItem === 'About' }
                  onClick={this.handleItemClick}
                ><Link to = "/about" 
                style = {{color:'black'}}
                >About</Link>
                </Menu.Item>
                <Menu.Item
                  name='Join A Class'
                  active={ activeItem === 'Join A Class' }
                  onClick={this.handleItemClick}
                >
                  <Link to = "/class"
                  style = {{color:'black'}}
                  >Join A Live Class</Link>
                </Menu.Item>
                <Menu.Item
                  name='Be A Mentor'
                  active={ activeItem === 'Be A Mentor' }
                  onClick={this.handleItemClick}
                >
                  <Link to = "/mentor"
                  style = {{color:'black'}}
                  >Be A Mentor</Link>
                </Menu.Item>
                <Menu.Item
                  name='Courses'
                  active={ activeItem === 'Courses' }
                  onClick={this.handleItemClick}
                ><Link to = "courses"
                style = {{color:'black'}}
                >Courses</Link>
                </Menu.Item>
                <Menu.Item
                  name='Contact'
                  active={ activeItem === 'Contact' }
                  onClick={this.handleItemClick}
                >
                  <Link to = "contact"
                  style = {{color:'black'}}
                  >Contact</Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    {
                      this.state.isLoggedIn === false?
                      <SocialButton
                        provider='google'
                        appId='402641560768-86dk8cskulohe6a9fleer4uuudk1fl34.apps.googleusercontent.com'
                        onLoginSuccess={this.handleSocialLogin}
                        onLoginFailure={this.handleSocialLoginFailure}
                        getInstance={this.setNodeRef.bind(this, 'google')}
                      >
                        Login with Google
                      </SocialButton>
                      :
                      // <></>
                      <Button onClick={this.logout}>Logout</Button>
                    }
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <LoginLogoutModal isOpen={this.state.openLoginModal} handleClose = {this.handleClose}/>
      </Container>
      <Route exact path="/" component={About} />
              <Route path="/about" component={About}/>
              <Route path="/class" component={EmbedExampleYouTube} />
              <Route path="/mentor" component={Mentor}/>
              <Route path="/courses" component={CourseContent}/>
      </Router>
      </div>
  };
}
export default App;

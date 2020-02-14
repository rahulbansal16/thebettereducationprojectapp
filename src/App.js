import React from 'react';
import code from './images/code.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Menu, Container,Icon} from 'semantic-ui-react';
import LoginLogoutModal from './component/LoginLogoutModal';
import About from './component/About';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Mentor from './component/Mentor';
import EmbedExampleYouTube from './component/Class';
import CourseContent from './component/CourseContent';
import SocialButton from './component/SocialButton';
import axios from 'axios';
import How from './component/How';
import Course from './component/Course';
import Videos from './component/Videos';




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
    this.sendUserInfo(user);
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
    axios.post(`https://t865tul3o8.execute-api.ap-south-1.amazonaws.com/prod/users`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(err =>{
      console.error(err);
    });
  }

  render(){
    const { activeItem } = this.state
    return <div className="App">
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
      {/* <Button id="customBtn">Yo</Button> */}
      <Router>
            <Container  textAlign='center'>
              <Menu pointing secondary size="massive" stackable>
                <Menu.Item
                  as = {Link}
                  to = "/about"
                  color = 'black'
                  name='About'
                  active={ activeItem === 'About' }
                  onClick={this.handleItemClick}
                  content="About"
                />
                <Menu.Item
                  as = {Link}
                  to = "/class/default"
                  color = 'black'
                  name='Join A Class'
                  active={ activeItem === 'Join A Class' }
                  onClick={this.handleItemClick}
                  content = "Join A Live Class"
                />
                <Menu.Item
                  as = {Link}
                  to = "/mentor"
                  color = 'black'
                  name='Be A Mentor'
                  active={ activeItem === 'Be A Mentor' }
                  onClick={this.handleItemClick}
                  content = "Be A Mentor"
                />
                <Menu.Item
                  as = {Link}
                  to = "/courses"
                  color = 'black'
                  name='Courses'
                  active={ activeItem === 'Course Content' }
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as = {Link}
                  to = "/videos"
                  color = 'black'                
                  name="videos"
                  active = {activeItem === "Videos"}
                  onClick = {this.handleItemClick}
                  content = "Videos"
                />
                <Menu.Item
                  as = {Link}
                  to = "/contact"
                  color = 'black'                                
                  name='Contact'
                  active={ activeItem === 'Contact' }
                  onClick={this.handleItemClick}
                  content="Contact"
                />
                <Menu.Menu position='right'>
                  <Menu.Item>
                    {
                      this.state.isLoggedIn === false?
                      <SocialButton
                        debug
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
              <Route path={`/class/:classId`} component={EmbedExampleYouTube} />
              <Route path="/mentor" component={Mentor}/>
              <Route path="/courses" component={CourseContent}/>
              <Route path="/videos" component={Videos}/>

              {/* <Course topic ={list}/> */}
      </Router>
      {/* <URLBarContainer/> */}
      </div>
  };
}
export default App;

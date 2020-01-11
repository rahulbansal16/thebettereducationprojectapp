import React from 'react';
// import Header from './Header';
// import Particicpant from './Participants';
import code from './images/code.jpg';
import './App.css';
// import Login from './Login';
// import Logout from './Logout';
// import HomePage from './HomePage';
// import Contact from './Contact';
// import Class from './Class';
// import Popup from "reactjs-popup";
// import About from './About';
// import ModalModalExample from './LoginLogout';
import 'semantic-ui-css/semantic.min.css';
import { Button, Menu, Container  } from 'semantic-ui-react';
import LoginLogoutModal from './component/LoginLogoutModal';
import About from './component/About';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Mentor from './component/Mentor';
import EmbedExampleYouTube from './component/Class';
import { withRouter } from 'react-router'; 
import CourseContent from './component/CourseContent';



const routing = (
  <Router>
      <div>
          <Route exact path="/" component ={<div>fddfd</div>}/>
          {/* <Route path = "/courses" component = {CoursesScroll}/> */}
      </div>
  </Router>
)

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isInClass:null,
      summaryText:'',
      open:false,
      isLoggedIn: this.isLoggedIn(),
      activeItem:"About",
      openLoginModal: false
    };
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
    var googleResponse = localStorage.getItem('google_response');
    return googleResponse !== undefined && googleResponse !== null ;
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
    this.setState({openLoginModal:true});
  }

  handleClose = () => {
    this.setState({openLoginModal:false});
  }

  render(){
    const { activeItem } = this.state
    return <div className="App">
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
                  >Join A Class</Link>
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
                    <Button primary as='a' inverted='true' onClick={this.toogleLoginLogout}>
                      Login
                    </Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              {/* <About/> */}
              <LoginLogoutModal isOpen={this.state.openLoginModal} handleClose = {this.handleClose}/>

              {/* <Route path="/contact" component={Contact} /> */}
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

const Welcome = () => (
  <div>Welcom</div>
);

export default App;

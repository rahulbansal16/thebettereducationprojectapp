import React from 'react';
// import Header from './Header';
// import Particicpant from './Participants';
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

            <Container>
              <Menu pointing secondary size="massive">
                <Menu.Item
                  name='About'
                  active={ activeItem === 'About' }
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Join A Class'
                  active={ activeItem === 'Join A Class' }
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Be A Mentor'
                  active={ activeItem === 'Be A Mentor' }
                  onClick={this.handleItemClick}
                />        
                <Menu.Item
                  name='Courses'
                  active={ activeItem === 'Courses' }
                  onClick={this.handleItemClick}
                />                        
                <Menu.Item
                  name='Contact'
                  active={ activeItem === 'Contact' }
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Button primary as='a' inverted='true' onClick={this.toogleLoginLogout}>
                      Login
                    </Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <About/>
              <LoginLogoutModal isOpen={this.state.openLoginModal} handleClose = {this.handleClose}/>

        {/* <Segment> */}
          {/* <img src='/images/wireframe/media-paragraph.png' /> */}
        {/* </Segment> */}
      </Container>
            {/* <ModalModalExample/> */}
            {/* <Button primary>Click Me</Button> */}
            {/* <Button secondary>Skip</Button> */}
            {/* <Header isLoggedIn = {this.isLoggedIn} signInSignOut = {this.showPopUp} />
            <Popup         
              open={this.state.open}
              closeOnDocumentClick
              onClose={this.closeModal}
            >
              <div class="popup">
                {
                  this.isLoggedIn() ? <Logout loginLogoutCallback={this.loginLogoutCallback}/> : 
                   <Login loginLogoutCallback={this.loginLogoutCallback}/>
                }
              </div>
            </Popup>
            <About/>
            <Class isLoggedIn={this.isLoggedIn}/>
            <Contact/>

            {/* <HomePage/> */}
            {/* <Header/> */}
            {/* <main className = "main">
              <section id="video">
                <iframe width="949" height="534" src="https://www.youtube.com/embed/3VTsIju1dLI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
              </section>
              { this.state.isInClass ? <Participant buttonText = "Leave the Class" onClick = {this.leaveTheClass}/>:
                <Particicpant buttonText = "Join the Class" onClick = {this.joinTheClass} />
              }
              <section id = "interactions"></section>
              <Login/>
              <Logout/>
            </main>

            {/* <Router> */}
            {/* </Router> */}  
            

          </div>
  };
}

export default App;

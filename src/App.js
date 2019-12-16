import React from 'react';
import Header from './Header';
import Particicpant from './Participants';
import './App.css';
import Participant from './Participants';
import Login from './Login';
import Logout from './Logout';
import HomePage from './HomePage';
import Contact from './Contact';
import Class from './Class';
import Popup from "reactjs-popup";
import About from './About';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isInClass:null,
      summaryText:'',
      open:false,
      isLoggedIn: this.isLoggedIn()
    };
    this.showPopUp = this.showPopUp.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loginLogoutCallback = this.loginLogoutCallback.bind(this);
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

  // 12727828

  render(){
    return <div className="App">
            <Header isLoggedIn = {this.isLoggedIn} signInSignOut = {this.showPopUp} />
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

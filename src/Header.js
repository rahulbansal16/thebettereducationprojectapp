import React from 'react';
import './Header.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { tsConstructorType } from '@babel/types';
import Popup from 'reactjs-popup';

function renderLoginLogout(){

}

function Header(props) {

    // props.links.map( (link) => {
    //     navLink.push(<Link to={link.url}>{link.text}</Link>);
    //     navLinkSwitch.push(
    //         <Route path={link.url}>
    //             <{link.component}/>
    //         </Route>
    //     );
    // } )

    

    const HeaderStyle = {
        // display: 'flex',
        // flexDirection: 'row'
    };

    const NavBarStyle = {

    }

    // openPopUp(){
    //     <Popup trigger={<button> Trigger</button>} position="right center">
    //     <div>Popup content here !!</div>
    //   </Popup>
    // }




    return (

        <header id="header" style = {HeaderStyle}>
            <div>
                <img alt = "The Logo Image" id = "logo-img"/>
            </div>
            <nav id = "navbar" style = {NavBarStyle}>
                <ul>
                    {
                        props.isLoggedIn() ? <li onClick = {props.signInSignOut} > Logout </li> :
                        <li onClick = {props.signInSignOut}>Login</li>
                    }
                    {/* <li> */}
                    {/* <Popup  position= "right center" >
                            <div>
                                Test
                            </div>
                        </Popup>
                    </li>
                    <li>
                        <Popup trigger = {<a>Login</a>} position= "right center" closeOnDocumentClick>
                            <div>
                                Hello
                            </div>
                        </Popup>
                    </li> */}
                    <li><a href="#about">About</a></li>
                    <li><a href="#class">Join Class</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
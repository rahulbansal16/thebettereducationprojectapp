import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import gapi from 'platform';

ReactDOM.render(<App ref={(ourComponent) => {window.ourComponent = ourComponent}}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// var googleUser = {};
// var startApp = function() {
//   gapi.load('auth2', function(){
//     // Retrieve the singleton for the GoogleAuth library and set up the client.
//     window.auth2 = gapi.auth2.init({
//       client_id: '402641560768-86dk8cskulohe6a9fleer4uuudk1fl34.apps.googleusercontent.com',
//       cookiepolicy: 'single_host_origin',
//       // Request scopes in addition to 'profile' and 'email'
//       //scope: 'additional_scope'
//     });
//     attachSignin(document.getElementById('customBtn'));
//   });
// };

// function attachSignin(element) {
//   console.log(element.id);
//   window.auth2.attachClickHandler(element, {},
//       function(googleUser) {
//         document.getElementById('name').innerText = "Signed in: " +
//             googleUser.getBasicProfile().getName();
//       }, function(error) {
//         alert(JSON.stringify(error, undefined, 2));
//       });
// }

import React from 'react';
import './Contact.css';

class Contact extends React.Component {

    render(){
        return <div id="contact">
            <h1>If you find it interesting...</h1>
            <h3>How do you take your coffee?</h3>
            <div id="contact-links">
                <a class = "btn contact-details" href="https://www.facebook.com/rahulrbbansal"><i class="fab fa-facebook-square"></i>Facebook</a>
                <a class = "btn contact-details" id = "profile-link" target="_blank" href="https://github.com/rahulbansal16"><i class="fab fa-github"></i>Github</a>
                <a class="btn contact-details" href="https://twitter.com/BansalRahul14"><i class="fab fa-twitter"></i>Twitter</a>
                <a class="btn contact-details" href="https://www.facebook.com/rahulrbbansal"><i class="fas fa-at"></i>Linkedin</a>
            </div>
        </div>
    }
}

export default Contact;
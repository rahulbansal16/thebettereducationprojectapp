import React from 'react';
import GoogleLogin from 'react-google-login';

// {"web":{"client_id":"402641560768-j8hit92q9vghqs7178nmgcptqejjubt9.apps.googleusercontent.com","project_id":"the-better-educa-1576080093719","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"7F7KPfYEJfVD5JpSWw2ia2wB","javascript_origins":["http://thebettereducationproject.org"]}}
const LoginStyle = {
    width: "400px",
    padding: '32px',
    backgroundColor : 'orange'
};

const H1Style = {
    fontFamily: 'Merriweather,Roboto,Helvetica,Arial,serif',
    fontWeight: '700',
    fontSize: '24px'
}

const H3Style = {
    fontSize: '14px'
}

class Login extends React.Component {

    constructor(props){
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response) {
        console.log("Logging the response from the google");
        let user = response.profileObj;
        localStorage.setItem('google_response', JSON.stringify(response));
        localStorage.setItem('user',JSON.stringify(user));
        console.log(response);
        this.props.loginLogoutCallback();
    }

    render(){
        return <div style = {LoginStyle}> 
                <h1 style = {H1Style} >Welcome to TheBetterEducationProject</h1>
                <h3 style = {H3Style} >Get ready to experience a learning through discussions</h3>
                <GoogleLogin clientId="402641560768-86dk8cskulohe6a9fleer4uuudk1fl34.apps.googleusercontent.com" buttonText="Login" 
                onSuccess={this.responseGoogle}
                onFailure={()=>{}} cookiePolicy={'single_host_origin'}/>
                <p>By signing in, you confirm that you have read and agree to our Terms &amp; Conditions and Privacy Policy</p>
            </div>
    }
}

export default Login;

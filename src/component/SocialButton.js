import React from 'react'
import SocialLogin from 'react-social-login'
import {Button, Icon} from 'semantic-ui-react';
 
class SocialButton extends React.Component {
 
    render() {
        return (
            <Button primary inverted onClick={this.props.triggerLogin} {...this.props}>
              <Icon name = 'google'></Icon>
              { this.props.children }
            </Button>
        );
    }
}
 
export default SocialLogin(SocialButton);
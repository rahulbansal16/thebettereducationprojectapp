import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

class TopMenu extends React.Component {
    render(){
        return(
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
        );
    }
};

export default TopMenu;
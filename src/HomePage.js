import React from 'react';
import Header from './Header';

class HomePage extends React.Component {
    navigationLinks = [{url:'google.com', text: 'hi'}, {url: '', text: ''}, {url:'', text: ''}];

    // constructor(props){
    //     super(props);
    // }

    render(){
        return <div>
            <Header links = {this.navigationLinks}/>
        </div>
    }    
}

export default HomePage;
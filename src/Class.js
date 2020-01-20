import React from 'react';
// import Participant from './Participants';
import './Class.css';
import {Button} from 'semantic-ui-react';

class Class extends React.Component {

    constructor(props) {
        super(props);
        // isLoggedIn = props.isLoggedIn;
        this.state = {
            isInClass:null,
            summaryText:'Dummy Text',
        };
        this.joinTheClass = this.joinTheClass.bind(this);
        this.participant = this.participant.bind(this);
    }

    joinTheClass() {
        //  
        if (!this.props.isLoggedIn()){
            // Ask the user to login
            this.setState(
                {
                    summaryText: "Please login to join the class"
                }
            )
        }
    }

    render() {
        return <div id="class">
            <div id="image">
                <iframe width="949" height="534" src="https://www.youtube.com/embed/3VTsIju1dLI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
            <div id="participants">
              {
                this.state.isInClass ?  this.participant("Leave the Class", this.leaveTheClass):
                this.participant("Join the Class", this.joinTheClass)
                
                // <Participant buttonText = "Leave the Class" onClick = {this.leaveTheClass}/>:
                // <Participant buttonText = "Join the Class" onClick = {this.joinTheClass} />
              }
              {/* <div className='summaryText'> 
                <p>{this.state.summaryText}</p>
              </div> */}
            </div>
        </div>
    }

    participant(text, onClickHandler){
        // var onClickHandler = this.props.onClick || (()=>{console.log("button clicked")});
        return (
            <div>
                <div className="participant">
                    <Button id = "button" onClick = {onClickHandler}>{text}</Button>
                </div>
                <div>{this.state.summaryText}</div>
            </div>
        );
    }
}


// function Participant(props) {
//     var buttonText = props.buttonText || "Join the Class";
//     var onClickHandler = props.onClick || (()=>{console.log("button clicked")});
//     var summary = props.summary;
//     return (
//         <div>
//             <div className="participant">
//                 <button id = "button" onClick = {onClickHandler}>{buttonText}</button>
//             </div>
//             <div>{summary}</div>
//         </div>
//     );
// }


export default Class;

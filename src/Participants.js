import React from 'react';
import './Participant.css';
import { Button } from 'semantic-ui-react';

const style = {

};


function Participant(props) {
    var buttonText = props.buttonText || "Join the Class";
    var onClickHandler = props.onClick || (()=>{console.log("button clicked")});
    var summary = props.summary;
    return (
        <div>
            <div className="participant">
                <Button onClick = {onClickHandler}>{buttonText}</Button>
            </div>
            <div>{summary}</div>
        </div>
    );
}

// Option of joining the lecture
// Count of total people who have joined the lecture

export default Participant;
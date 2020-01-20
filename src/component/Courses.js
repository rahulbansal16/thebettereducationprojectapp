import React from 'react';
import { Responsive,Container, Header, Button,Icon, Segment, Grid, Image } from 'semantic-ui-react'


const Courses = (props) => {
    // props.images = code;

    const {images, heading, subHeading} = props;

    return(
        <div>
            <Image src = {images} size = 'large'/>
            <Header  style = {{position:'absolute', top:0}} as="h2">Overlay</Header>
        </div>
    );
};

export default Courses;
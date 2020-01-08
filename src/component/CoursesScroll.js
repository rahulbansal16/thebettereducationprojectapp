import React from 'react';
import { Responsive,Container, Header,Label, Button,Icon, Segment, Grid, Image } from 'semantic-ui-react'
import code from '../images/code.jpg';
import bulb from '../images/bulb.jpg';
import Courses from './Courses';

const CoursesScroll = () => {
    return (
        <div>
            <Image.Group size = "medium">
                <Image src ={code}>
                        <Label content='Image not found!' icon='warning' />
                    {/* <Header>Hi</Header> */}
                </Image>
                <Image constent= "hiu" src ={bulb}/>
                {/* <Courses images={code}></Courses> */}
                {/* <Courses images={bulb}></Courses> */}
            </Image.Group>
        </div>
    );

};

export default CoursesScroll;
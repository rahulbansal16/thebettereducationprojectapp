import React from 'react';
import {List, Icon} from 'semantic-ui-react';
import AssignmentSubmit from './AssignmentSubmit';
import axios from 'axios';

var list = {
    name : "Algorithms",
    id: "1",
    videoUrl:"",
    codeUrl:"",
    submitPossible:true,
    subTopics: [
        {
            name : "Graphs",
            videoUrl:"",
            codeUrl:"",
            id:"2",
            submitPossible:true,
            subTopics: [
                {
                    name : "7  bridge Problem",
                    videoUrl:"",
                    codeUrl:"",
                    id:"3",
                    submitPossible:true,
                    subTopics:[]
                },
                {
                  name : "Degree of Graph",
                  videoUrl:"",
                  codeUrl:"",
                  id:"4",
                  submitPossible:true,
                  subTopics:[]
                },
                {
                  name : "Graph Representation",
                  videoUrl:"",
                  codeUrl:"",
                  id:"5",
                  submitPossible:true,
                  subTopics:[
                    {
                        name : "Adjacency Matrix",
                        videoUrl:"",
                        codeUrl:"",
                        id:"6",
                        submitPossible:true,
                        subTopics:[]
                      },
                      {
                        name : "Adjacency List",
                        videoUrl:"",
                        codeUrl:"",
                        id:"7",
                        submitPossible:true,
                        subTopics:[]
                      }
                  ]
                },
                {
                    name : "Graph Traversal",
                    videoUrl:"",
                    codeUrl:"",
                    id:"8",
                    submitPossible:true,
                    subTopics:[
                        {
                            name : "BFS",
                            videoUrl:"",
                            codeUrl:"",
                            id:"9",
                            submitPossible:true,
                            subTopics:[
                                {
                                    name : "Rate Maze BackTracking Problem",
                                    videoUrl:"",
                                    codeUrl:"",
                                    id:"10",
                                    submitPossible:true,
                                    subTopics:[]
                                  },
                                  {
                                    name : "Snake And Ladder Problem",
                                    videoUrl:"",
                                    codeUrl:"",
                                    id:"11",
                                    submitPossible:true,
                                    subTopics:[]
                                  },
                                  {
                                    name : "Wolf, Goat And Cabbage Problem",
                                    videoUrl:"",
                                    codeUrl:"",
                                    id:"12",
                                    submitPossible:true,
                                    subTopics:[]
                                  },
                                  {
                                    name : "Find Mutual Connection between two people",
                                    videoUrl:"",
                                    codeUrl:"",
                                    id:"13",
                                    submitPossible:true,
                                    subTopics:[]
                                  }
                            ]
                        },
                        {
                            name : "DFS",
                            videoUrl:"",
                            codeUrl:"",
                            id:"14",
                            submitPossible:true,
                            subTopics:[
                                {
                                    name : "DFS on Infinite Graph",
                                    videoUrl:"",
                                    codeUrl:"",
                                    id:"15",
                                    submitPossible:true,
                                    subTopics:[]
                                },
                                {
                                    name : "Number of Island on 2d matrix",
                                    videoUrl:"",
                                    codeUrl:"",
                                    id:"16",
                                    submitPossible:true,
                                    subTopics:[]
                                },
                                {
                                    name : "DigiJump",
                                    videoUrl:"",
                                    codeUrl:"",
                                    id:"17",
                                    submitPossible:true,
                                    subTopics:[]
                                }
                            ]
                          }
                    ]
                  }
            ],
        },
        {
          name : "Stacks",
          videoUrl:"",
          codeUrl:"",
          subTopics: [
              {
                  name : "What is Stack",
                  videoUrl:"",
                  codeUrl:"",
                  id:"18",
                  submitPossible:true,
                  subTopics:[]
              },
              {
                name : "Implement Stack using Arrays",
                videoUrl:"",
                codeUrl:"",
                id:"19",
                submitPossible:true,
                subTopics:[]
            },
            {
                name : "Balanced Paranthesis",
                videoUrl:"",
                codeUrl:"",
                id:"20",
                submitPossible:true,
                subTopics:[]
            },
            {
                name : "Postfix Evaluation",
                videoUrl:"",
                codeUrl:"",
                id:"21",
                submitPossible:true,
                subTopics:[]
            },
            {
                name : "Convert Postfix to Infix Expression",
                videoUrl:"",
                codeUrl:"",
                id:"22",
                submitPossible:true,
                subTopics:[]
            }
          ],
      }
    ],
}

class Course extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            openAssignment:false,
            assignmentTopic:null,
            completedAssignment:[]
        }
        this.user = localStorage.getItem("user");
        this.completedAssignmentMap = {};
        if ( this.user != null) {
            this.user = JSON.parse(this.user);
        }
    }

    closeModal = () =>{
        this.setState(
            {openAssignment:false}
        )
    }

    getAssignmentsForUser = () => {
        axios.get('https://t865tul3o8.execute-api.ap-south-1.amazonaws.com/prod/assignment', { params: { 'email': this.user["email"] } }).then(res => {
            res.map( (assignment) => 
                {this.completedAssignmentMap[assignment.id] = true;}
            );
            this.setState(
                {
                    completedAssignment:res
                }
            );
        }).catch( res => {
            console.log("Got an Error Fetching the Resultz");
        })
    }

    componentDidMount = () => {
        this.getAssignmentsForUser();
    }

    render(){ 
        return (<>
        {this.state.openAssignment?<AssignmentSubmit open={this.state.openAssignment} callback={this.closeModal} topic={this.state.assignmentTopic}/>:<></>}
        <List as='ol' style = {{width:'400px'}}>
            {/* <List.Item> */}
                {this.generateSubList(list,0)}
            {/* </List.Item> */}
            {/* {generateSubList(topic)} */}
        </List>    
    </>);
    }

    isPrsent = (course, completedAssignment) => {

    }

    generateTick = (individualCourse) => {
        return(
            this.completedAssignmentMap[individualCourse.id]?<Icon name="check" style={{marginLeft:'10px', color:'green'}}></Icon>:<></>
        );
    }

    // topic is an object that stores information about 
    openSubmitModal = (topic)=>{
        console.log("The topic is clicked", topic);
        if (topic["submitPossible"] === true){
            // this.props.assignmentTopic = topic;
            this.setState({openAssignment:true,assignmentTopic:topic})
        //    return( <AssignmentSubmit/>);
        }
    }
    
    getItem = (topic) => {
        return (
            <div style={{display:'flex' }}>
                <div onClick={()=>this.openSubmitModal(topic)}>{topic.name}</div>
                <div>{this.generateTick(topic)}</div>
            </div>
        );
    }
    
    generateSubList = (topic, idx) => {
    
        let nestedList = topic.subTopics.map((subTopic) =>
            <List.Item>
            {this.generateSubList(subTopic, idx)}
            </List.Item>
        )
        return (
            <>
            {   
                topic.subTopics.length === 0?
                <List.Item>{this.getItem(topic)}</List.Item> :
                <>
                {this.getItem(topic)}
               <List.List as = 'ol'>
                    {nestedList}
                </List.List>
                </>
            }
            </>
        );
    }
}
export default Course;
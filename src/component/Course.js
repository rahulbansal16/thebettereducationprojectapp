import React from 'react';
import {List, Icon} from 'semantic-ui-react';
import AssignmentSubmit from './AssignmentSubmit';

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
      //   {
      //     name : "Graphs",
      //     videoUrl:"",
      //     codeUrl:"",
      //     subTopics: [
      //         {
      //             topic : "Adjacency List",
      //             videoUrl:"",
      //             codeUrl:"",
      //             subTopics:[]
      //         }
      //     ],
      // }
    ],
}

class Course extends React.Component {

    // topic = this.props.topic;
    // topic = list;

    constructor(props) {
        super(props);
        // this.props.topic = list;
        // this.props.assignmentTopic = null;
        this.state  = {
            openAssignment:false,
            assignmentTopic:null
        }
        // this.state = { count: 0 };
    }

    closeModal = () =>{
        this.setState(
            {openAssignment:false}
        )
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


    generateTick = (individualCourse) => {
        return(
            <Icon name="check" style={{marginLeft:'10px', color:'green'}}></Icon>
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
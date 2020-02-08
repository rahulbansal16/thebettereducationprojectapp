import React from 'react';
import {Modal,Form,Label,Input,Button,Grid,Header,Card,Message,Image, Icon, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BrideProblem from '../images/BridgeProblem.JPG';
import BridgeProblemSolution from '../images/BridgeProblemSolution.JPG';
import GraphRepresentation from '../images/GraphRepresentation.JPG';
import AdjacencyMatrix from '../images/AdjacencyMatrix.JPG';
import Complexity from '../images/Complexity.JPG';
import Questions from '../images/Questions.JPG';

const videoList = [
    {
        id:1,
        title:"7 Bridge Problem",
        image:BrideProblem,
        link:"/class/bridgeproblem",
        description:"History of Graph Theory and Intro to 7 Bridge Problem."
    },
    {
        id:2,
        title:"7 Bridge Problem Solution",
        image:BridgeProblemSolution,
        link:"/class/bridgeproblemsolution",
        description:"Solution to the famous 7 Bridge Problem."
    },
    {
        id:3,
        title:"Graph Terminology",
        image:GraphRepresentation,
        link:"/class/graphterminology",
        description:"Intro to Edges, Nodes, Directed, Undirected and other Terminology"
    },
    {
        id:4,
        title:"Adjacency List",
        image:GraphRepresentation,
        link:"/class/adjlist",
        description:"Intro to Adjacency List"
    },
    {
        id:5,
        title:"Adjacency Matrix",
        image:AdjacencyMatrix,
        link:"/class/adjmatrix",
        description:"Intro to Adjacency Matrix"
    },
    {
        id:6,
        title:"Complexity",
        image:Complexity,
        link:"/class/complexity",
        description:"Time and Space Complexity Analysis of Adj. Matrix and List"
    },
    {
        id:7,
        title:"Questions",
        image:Questions,
        link:"/class/question",
        description:"Questions related to the Graph Representation"
    },
    {
        id:8,
        title:"BFS and DFS",
        image:GraphRepresentation,
        link:"/class/bfsanddfs",
        description:"Intro to BFS and DFS Algorithm"
    },
    {
        id:9,
        title:"Infix to Postfix Expression",
        image:Complexity,
        link:"/class/infixtopostfix",
        description:"How to convert Infix to Postfix Expression"
    },
    {
        id:10,
        title:"Call Stack",
        image:Questions,
        link:'/class/callstack',
        description:"What happens when a recursive function calls are made"
    }
];


class Videos extends React.Component {

    // The most important part is community Testing and for doing that,
    getVideoCard = (video ) => {
        const {id,title, image,description, link } = video;
        console.log("In the get Video Card");
        return(<>
                <Card>
                    <Image src={image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{title}</Card.Header>
                        {/* <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                        </Card.Meta> */}
                        <Card.Description>
                            {description}
                            {/* {{description}} */}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={link}>
                            <Icon name='arrow right' />
                               Click Here to go to Class
                        </Link>
                    </Card.Content>
                </Card>
        </>);
    }

    getThe

    render(){
        return(
            <>
                <Container fluid style={{marginTop:'50px',padding:'0px 50px 0px 50px', height:'100vh'}}>
                <Header as = "h1" content = "What you want to learn today?" style={{marginBottom:'50px'}}></Header>
                <Grid stackable centered>
                    {
                        videoList.map( video => 
                            <Grid.Column widescreen={5}>
                                {this.getVideoCard(video)}
                            </Grid.Column>
                        )
                    }
                </Grid>
                </Container>
            </>
        );
    }

}

export default Videos;
import React from 'react'
import {Container,List, Header} from 'semantic-ui-react';

const CourseContent = () => (
    <>
        <Container textAlign="left">
            <Header as = "h1" content = "Course Content" style={{
                    fontSize: null ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: null ? '1.5em' : '1.5em',
            }}>
            </Header>
            <Header as = "h4" content = "The most important thing is to be curious and have the hunger to seek those answers, rest other things will fall in place."></Header>
            <List ordered >
                <List.Item as='a'>Graphs
                        <List.List>
                            <List.Item>Origin of Graph Theory</List.Item>
                            <List.Item>Graph Representation 
                                <List.List>
                                    <List.Item>Adjacency List</List.Item>
                                    <List.Item>Adjacency Matrix</List.Item>
                                </List.List>
                            </List.Item>
                            <List.Item>Degree</List.Item>
                            <List.Item>Directed vs Undirected Graph</List.Item>
                            <List.Item>DFS</List.Item>
                            <List.Item>BFS</List.Item>
                            <List.Item>Questions</List.Item>
                        </List.List>
                </List.Item>
                <List.Item as='a'>Arrays</List.Item>
            </List>

        </Container>
    </>
);

export default CourseContent;
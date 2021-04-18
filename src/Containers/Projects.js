import React, { Fragment } from 'react';
import Styled from 'styled-components';
import { Card } from 'react-bootstrap';



const Projects = () => {
    return(
        <>
        <h1 style={{color: "#52074a"}}>My Projects</h1>
        <p> Here is a list of projects page</p>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Gym Membership</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                <Card.Text>
                Python | Flask | PostgreSQL
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

        </>
    )
    
}

export default Projects;
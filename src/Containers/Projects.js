import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';



const Projects = () => {

    const Styles = styled.div`
    .color: pink;
    
    `;



    return(
        <>
        <h1 style={{color: "#52074a"}}>My Projects</h1>
        <p> Here is a list of projects page</p>
        <Styles>
            <Card style={{ width: '18rem', margin: '20px' }}>
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
        </Styles>
        <Styles>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Space Education</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                    <Card.Text>
                    JavaScript | Vue | 3rd Party APIs
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Styles>
        <Styles>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Superhero Sightings</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                    <Card.Text>
                    Java | Spring | h2SQL
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Styles>

        </>
    )
    
}

export default Projects;
import {React, Fragment, Link } from 'react';
import styled from 'styled-components';
import { CardGroup, Card, Container, Jumbotron as Jumbo } from 'react-bootstrap';



const Projects = () => {

    const Styles = styled.div`

    background-color: lightgrey;
    height: 100vh;
    .card {
        background: #52074a;
        color: #efefef;
    }
    .cardgroup {
        background: yellow;
    }
    `;

    return(
        <>
        <Styles>

            <Container>
            <h1 className="text-center" style={{color: "#52074a"}}>My Projects</h1>
            </Container>


            <CardGroup>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Gym Membership</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                    <Card.Text>Python | Flask | PostgreSQL </Card.Text>
                    <Card.Link href="/projects/gym">Details</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Space Education</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                    <Card.Text>JavaScript | Vue | 3rd Party APIs</Card.Text>
                    <Card.Link href="/projects/space">Details</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Superhero Sightings</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                    <Card.Text> Java | Spring | h2SQL </Card.Text>
                    <Card.Link href="/projects/superhero">Details</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Upcoming: Map Project</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                    <Card.Text>JavaScript | Leaflet </Card.Text>
                    <Card.Text>Coming Soon</Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </Styles>
        </>
    )
    
}

export default Projects;
import {React, Fragment, Link } from 'react';
import styled from 'styled-components';
import { CardGroup, Card, Container, Jumbotron as Jumbo } from 'react-bootstrap';
import globeImage from '../assets/globeImage.jpg'



const Projects = () => {

    const Styles = styled.div`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #52074a, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }

    // background-color: lightgrey;
   
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
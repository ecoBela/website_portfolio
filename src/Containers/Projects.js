import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CardGroup, Card, Container } from 'react-bootstrap';



const Projects = () => {

    const Styles = styled.div`
    .card {
        background: #52074a;
        color: #efefef;
    }


    
    `;



    return(
        <>
        
        <h1 style={{color: "#52074a"}}>My Projects</h1>
        

        
        <Styles>
            <CardGroup>
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
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Upcoming: Mapping Project</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web App</Card.Subtitle>
                    <Card.Text>
                    JavaScript | Leaflet
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            </CardGroup>
        </Styles>

       


        </>
    )
    
}

export default Projects;
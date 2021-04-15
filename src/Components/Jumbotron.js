import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import globeImage from '../assets/globeImage.jpg';

const Styles = styled.div``;

const Jumbotron = () => {
    return (
        <Styles>
        <Jumbo fluid classname="jumbo">
            <div classname="overlay"></div>
            <Container>
                <h1>Welcome to my portfolio</h1>
                <p>See my previous work</p>
            </Container>

        </Jumbo>
    </Styles>

    )
}

export default Jumbotron;


import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import globeImage from '../assets/globeImage.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${globeImage}) no-repeat fixed bottom;
    background-size: cover;
    colour: pink;
    height: 200px;
    position: relative;
    z-index: -2;
}
.overlay {
    background-color: blue;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

const Jumbotron = () => {
    return (
        <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome to my portfolio</h1>
                <p>See my previous work</p>
            </Container>

        </Jumbo>
    </Styles>

    )
}

export default Jumbotron;


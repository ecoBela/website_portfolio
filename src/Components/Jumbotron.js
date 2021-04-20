import {React, Fragment} from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import globeImage from '../assets/globeImage.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${globeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 250px;
    margin-bottom: 0;
    position: relative;
    z-index: -2;
}
.overlay {
    background-color: #000;
    opacity: 0.3;
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
        <Fragment>
            <Styles>
                <Jumbo fluid className="jumbo">
                 <div className="overlay"></div>
                    <Container className="text-center">
                        <h1>I'm a web developer</h1>
                        <p>Come in and take a peek...</p>
                    </Container>
                </Jumbo>
            </Styles>
        </Fragment>
    )
}

export default Jumbotron;


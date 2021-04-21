import React, { Fragment } from 'react';
import styled from 'styled-components';
import photo from '../assets/photo.jpeg';

const Styled = styled.div`
// background: #52074a;
// background: linear-gradient(white, grey);
background: url(${photo});
height: 100vh;
color: white;
`;

const StyledParagraph = styled.p`
background: grey;
opacity: 0.3;
margin-top:20rem;
padding: 1rem;
`;

const About = () => {
    return (
        <>
        <Styled>
        <h2>Hi!  I'm Bela. </h2>
        <StyledParagraph>
        <p>Add photo</p>
        <p>Background</p>
        <p>Values</p>
        <p>Skills</p>
        <p>Interests</p>
        </StyledParagraph>
        </Styled>
        </>
    )
     
}

export default About;
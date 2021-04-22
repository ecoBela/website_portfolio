import React, { Fragment } from 'react';
import styled from 'styled-components';
import photo from '../assets/photo.jpeg';

const Styled = styled.div`
background: black;
// background: #E0E0E0;
// background: linear-gradient(grey, #52074a);
// background: url(${photo}) no-repeat;
height: 100vh;
display: flex;
justify-items: center;
.intro{
    margin: 1rem;
}


color: #52074a;
`;

const StyledParagraph = styled.p`
// background: grey;
// opacity: 0.5;
margin-top:10rem;
margin-left: 5rem;
margin-right: 5rem;
margin-bottom: 0;
padding: 1rem;
text-align: center;
`;

const About = () => {
    return (
        <>
        <Styled>
         <h2 className="intro">Hi! I'm Bela</h2>
         <img src={photo}/>
            <StyledParagraph>
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
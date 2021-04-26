import React, { Fragment } from 'react';
import styled from 'styled-components';
import photo from '../assets/photo.jpeg';

const Styled = styled.div`
// background: black;
// background: #E0E0E0;
// background: linear-gradient(grey, #52074a);
background: url(${photo});
height: 100vh;
display: flex;
justify-items: center;
.intro{
    margin: 1rem;
}
color: #52074a;
`;

const StyledParagraph = styled.p`
background: grey;
opacity: 0.85;
margin-top:10rem;
margin-left: auto;
margin-right: auto;
// margin-bottom: 0;
padding: 1rem;
text-align: left;

`;

const About = () => {
    return (
        <>
        <Styled>
         
         
            <StyledParagraph>
            {/* <img src={photo}/> */}
            <h2>Hi! I'm Bela</h2>
                <p>BACKGROUND
                    <ul>
                        <li>Decade in digital depts or companies</li>
                        <li>Digital PM and Comms roles</li>
                        <li>Retrained in software development</li>
                    </ul>
                </p>
                <p>VALUES
                <ul>
                        <li>Kindness and respect</li>
                        <li>Assume good intent</li>
                        <li>Collaboration and community</li>
                        <li>Relationships are everything</li>
                    </ul>
                </p>
                <p>SKILLS
                    <ul>
                        <li>Software development</li>
                        <li>Project management</li>
                        <li>Communications</li>
                    </ul>
                </p>
                
            </StyledParagraph>
        </Styled>
        </>
    )
     
}

export default About;
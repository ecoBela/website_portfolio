import {React, Fragment} from 'react';
import styled from 'styled-components';
import globeImage from '../assets/globeImage.jpg';


const Styled_h1 = styled.h1`
margin: 3rem;
color: black;

`;

const Styled = styled.div`
background: url(${globeImage});
background-size: cover;
opacity: 0.9;
height: 100vh;
color: white;
padding: 3rem;
`;






const Gym = () =>{
    return(
        <>
        <Styled>

        <Styled_h1>
        Gym project page
        </Styled_h1>

        <h2>Gym project page</h2>
        <p>Images/screenshots of gym app</p>
        <p>Brief with MVP, extensions and lessons learned</p>
        <a href="/projects">Back to list of projects</a>

        </Styled>
        </>
    )
}


export default Gym;
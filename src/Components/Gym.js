import {React, Fragment} from 'react';
import styled from 'styled-components';
import gym_image from '../assets/gym_image.png';


const Styled = styled.div`
// margin: 3rem;
padding: 5rem;
    background: linear-gradient(-45deg, #C7C9C7, #52074a, #520725);
            height: 100vh;
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
                };

    // background: grey;

   

    
`;


const Gym = () =>{
    return(
        <>
        <Styled>
        <div>

        <h2>Gym project page</h2>
       <img src={gym_image} alt="gym_image" />
        <p>Brief with MVP, extensions and lessons learned</p>
        <a href="/projects">Back to list of projects</a>

        </div>
        </Styled>

        
        </>
    )
}


export default Gym;
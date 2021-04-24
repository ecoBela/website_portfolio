import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import globe2 from '../assets/globe2.jpg'; //danielle rice on Unsplash

const Styled = styled.div`
    padding: 5rem;
    background-image: url(${globe2});
    background-size: cover;
    height: 100vh;
    color: #52074a;

    h2{
        background-color: #52074a;
        opacity: 0.5;
        text-align: center;
        color: white;
        padding: 1rem;
        
    }

    a{
       
        color: #52074a;
    }
`;

const Styled2 = styled.div`
background-color: white;
opacity: 0.5;
`;



const Contact = () => {
    return(
        <>
        <Styled>
            <div>
                 <Container className="h2 text-center">

                   <Styled2>
                         
                 <h2>CONTACT ME</h2>
                 <p>belahamid[at]gmail[dot]com</p>
                 <a href="https://www.linkedin.com/in/belahamid/" target="_blank">LinkedIn
                    </a>
                    </Styled2>

                 </Container>
                    
                
                
            </div>
        </Styled>

       
        </>
    )
}

export default Contact;
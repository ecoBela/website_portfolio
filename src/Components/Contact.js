import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import globe2 from '../assets/globe2.jpg';

const Styled = styled.div`
    padding: 5rem;
    background-image: url(${globe2});
    background-size: cover;
    height: 100vh;
    color: white;

    h2{
        // background-color: grey;
        text-align: center;
        // color: white;
        padding: 1rem;
        
    }

   

    a{
        color: white;
    }
`;



const Contact = () => {
    return(
        <>
        <Styled>
            <div>
                 <Container className="h2 text-center">
                     <a href="https://www.linkedin.com/in/belahamid/">LinkedIn
                    </a>
                 <h2>CONTACT ME: belahamid[at]gmail[dot]com</h2>
                 <p>belahamid[at]gmail[dot]com</p>
                 </Container>
                    
                
                
            </div>
        </Styled>

       
        </>
    )
}

export default Contact;
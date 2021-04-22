import React, { Fragment } from 'react';
import styled from 'styled-components';
import globe2 from '../assets/globe2.jpg';

const Styled = styled.div`
    padding: 5rem;
    // background: lightgrey;
    // background-image: url(${globe2.jpg});
    // background-size: cover;

    background-image: url(${globe2});
        background-size: cover;
        height: 100vh;
    

    .img{
        object-fit: contain;
    }
`;


const Contact = () => {
    return(
        <>
        <Styled>
            <div>
                <button><a href="https://www.linkedin.com/in/belahamid/">
                    LinkedIn
                    </a></button>
                 <h2>CONTACT ME:  belahamid[at]gmail[dot]com</h2>
                                 
                 

            </div>
        </Styled>
        </>
    )
}

export default Contact;
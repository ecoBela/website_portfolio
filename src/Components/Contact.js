import React, { Fragment } from 'react';
import styled from 'styled-components';
import globe2 from '../assets/globe2.jpg';

const Styled = styled.div`
    background: lightgrey;
    // background-image: url(${globe2.jpg});
    background-size: cover;
    height: 100vh;
`;


const Contact = () => {
    return(
        <>
        <Styled>
            <div>
                 <p>Contact me: see details below</p>
            </div>
        </Styled>
        </>
    )
}

export default Contact;
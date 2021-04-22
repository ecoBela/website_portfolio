import {React, Fragment} from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import globeImage from '../assets/globeImage.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${globeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 100vh;
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

h2{
    margin: 3rem;
    padding: 3rem;
}

button{
    margin: 2rem;
    padding: 2rem;
}
`;



const Jumbotron = () => {
    return (
        <Fragment>
            <Styles>
                <Jumbo fluid className="jumbo">
                 <div className="overlay"></div>
                    <Container className="text-center">
                        
                        <h1>Welcome</h1>
                        <h1>My name is Bela.  I'm a web developer</h1>
                       
                        
                       <h2>Come in and take a peek</h2>

                       <button>LinkedIn</button>
                       <button>Github</button>
                       <p>belahamid[at]gmail.com</p>
                        

                    </Container>
                </Jumbo>
            </Styles>
        </Fragment>
    )
}

export default Jumbotron;


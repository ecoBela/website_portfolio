import {Fragment, React} from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #52074a;
}

.navbar-brand, .navbar-nav, .nav-link{
    color: white;

    &:hover{
        color: grey;
    }
}
`;


const NavigationBar = () =>{
    return(
        <>  
            <Styles>
                <Navbar expand="lg" className="fixed-top" >
                    <Navbar.Brand href="/projects">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link  style={{ color: "white" }} href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link style={{ color: "white" }} href="/about">About Me</Nav.Link></Nav.Item>
                            {/* <Nav.Item><Nav.Link style={{ color: "white" }} href="/projects">Projects</Nav.Link></Nav.Item> */}
                            <Nav.Item><Nav.Link style={{ color: "white" }} href="/contact">Contact</Nav.Link></Nav.Item>
                        </Nav>  
                    </Navbar.Collapse>
                </Navbar> 
            </Styles>
        </>
    )
}

export default NavigationBar;
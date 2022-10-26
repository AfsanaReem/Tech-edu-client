import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const HeaderNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/education.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Tech Edu
                </Navbar.Brand>
                <Navbar.Brand href="/courses">Courses</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Toggle</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;
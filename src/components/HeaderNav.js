import React, { useContext, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';

const HeaderNav = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

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
                    {<div className="form-check form-switch mt-2">
                        <input type="checkbox" className="form-check-input" role="switch" id="flexSwitchCheckDefault" />
                    </div>}
                    <Nav.Link href="/login">
                        {isHovering && <h4 className='text-white'>{user.displayName}</h4>}
                        {
                            user ?
                                < FaUser onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}></FaUser> : 'Login'
                        }
                    </Nav.Link>
                    <>
                        {
                            user?.uid ?
                                <>
                                    <Image style={{ height: '35px' }} src={user?.photoURL} className='roundedCircle fluid'></Image>
                                    <Button variant="dark" onClick={handleLogOut}>Log out</Button>
                                </>
                                :
                                <>

                                </>
                        }


                    </>
                </Nav>
            </Container>
        </Navbar >
    );
};

export default HeaderNav;
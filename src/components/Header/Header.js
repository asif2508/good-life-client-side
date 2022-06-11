import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout =() =>{
        signOut(auth);
        navigate('/');
        localStorage.removeItem('accessToken');
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Good Life</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                user ?
                                    <>
                                        <Nav.Link as={CustomLink} to='/habits' href="#habits">Habits</Nav.Link>
                                        <button onClick={handleLogout} className='signout-btn'>Sign Out</button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={CustomLink} to='/' href="#home">Home</Nav.Link>
                                        <Nav.Link as={CustomLink} to='/login' href="#login">Login</Nav.Link>
                                        <Nav.Link as={CustomLink} to='/register' href="#link">Register</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
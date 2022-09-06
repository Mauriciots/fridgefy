import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { authenticate } from '../services/authService';
import { useAppContext } from '../context/appContext';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { state, dispatch } = useAppContext();

    const handleLoginClick = async () => {
        const user = await authenticate();
        dispatch({ type: 'login', payload: { user } });
    };

    const handleLogoutClick = async () => {
        dispatch({ type: 'logout' });
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Fridgefy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/recipes" className="nav-link" role="button">Recipes</Link>
                        <Link to="/shopping-list" className="nav-link" role="button">My shopping list</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {state.user
                            ? (
                                <>
                                    Signed in as: {state.user.displayName}
                                    <Button variant="link" onClick={handleLogoutClick}>Logout</Button>
                                </>
                            ) : (<Button variant="success" onClick={handleLoginClick}>Login</Button>)
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

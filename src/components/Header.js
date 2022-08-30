import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { authenticate } from '../services/authService';
import { useAppContext } from '../context/appContext';

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
                        <Nav.Link href="#recipes">Recipes</Nav.Link>
                        <Nav.Link href="#shopping-list">My shopping list</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {state.user
                            ? (
                                <>
                                    Signed in as: {state.user.displayName}
                                    <button onClick={handleLogoutClick}>Logout</button>
                                </>
                            ) : (<button onClick={handleLoginClick}>Login</button>)
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

import React from 'react';
import StyledHeader from './Header.styled';
import { authenticate } from '../../services/authService';
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
        <StyledHeader>
            <h1>Fridgefy</h1>
            <ul>
                <li>Recipes</li>
                <li>My shopping list</li>
            </ul>
            <div>
                {state.user ? (
                    <>
                        <p>{state.user ? state.user.displayName : 'Not logged yet'}</p>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </>
                ) : (
                    <button onClick={handleLoginClick}>Login</button>
                )}
            </div>
        </StyledHeader>
    )
}

export default Header;

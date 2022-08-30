import React, { useContext, useReducer } from 'react';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'login':
            return {
                ...state,
                user: payload.user,
            }
        case 'logout':
            return {
                ...state,
                user: undefined,
            }
        default:
            throw new Error('App Context Reduce: unknown action');
    }
}

const Context = React.createContext({});

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { user: undefined });
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export const useAppContext = () => {
    return useContext(Context);
}
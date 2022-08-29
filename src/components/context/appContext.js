import React, { useContext, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'anything':
            return {
                ...state,
                anything: 'something',
            }
        default:
            throw new Error('App Context Reduce: unknown action');
    }
}

const Context = React.createContext({});

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { anything: 'Anything' });
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export const useAppContext = () => {
    return useContext(Context);
}
import React, { createContext, useContext, useReducer } from 'react';
import getState from './flux.js';

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const initialState = getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore => setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions }
        })
    });

    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            store: initialState.store,
            actions: initialState.actions
        }
    );

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };

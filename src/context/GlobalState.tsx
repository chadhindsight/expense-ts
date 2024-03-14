import { createContext, useContext, useReducer } from 'react';
import { appReducer } from "./AppReducer";
import { AppContextProps, AppProviderProps } from '../types/transactionTypes';

// specify the shape the data related to defaultContextValue should be
const defaultContextValue: AppContextProps = {
    listOfTransactions: [],
    dispatch: () => { },
};

export const AppContext = createContext(defaultContextValue);

export const useAppContext = () => {
    const establishedContext = useContext(AppContext);
    if (!establishedContext) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return establishedContext
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [listOfTransactions, dispatch] = useReducer(appReducer, []);

    return (
        <AppContext.Provider value={{ listOfTransactions, dispatch }
        }>
            {children}
        </AppContext.Provider>
    );
};

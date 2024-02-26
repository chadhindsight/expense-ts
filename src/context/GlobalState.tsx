import { createContext, useContext, ReactNode, useReducer } from 'react';
import { appReducer } from "./AppReducer";
import { AppContextProps } from '../types/transactionTypes';


const defaultContextValue: AppContextProps = {
    listOfTransactions: [],
    dispatch: () => { },
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const useAppContext = () => {
    const establishedContext = useContext(AppContext);
    if (!establishedContext) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return establishedContext
}

// Provider setup
type AppProviderProps = {
    children: ReactNode;
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

import { Dispatch, ReactNode } from "react";

// single transaction
export interface TransactionInterface {
    text: string;
    amount: number;
    id: number;
}

// list of transactions
export type TransactionInterfaceList = TransactionInterface[] | [];

export type TransactionAction =
    { type: 'DELETE_TRANSACTION', payload: number }
    | { type: 'SET_TRANSACTION', payload: TransactionInterfaceList }
    | { type: 'ADD_TRANSACTION', payload: TransactionInterface };

export interface AppContextProps {
    listOfTransactions: TransactionInterfaceList;
    dispatch: Dispatch<TransactionAction>;
}

// Provider setup
export type AppProviderProps = {
    children: ReactNode;
}
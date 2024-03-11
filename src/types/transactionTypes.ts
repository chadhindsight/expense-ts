import { Dispatch, ReactNode } from "react";

// single transaction
export interface TransactionType {
    text: string;
    amount: number;
    id: number;
}

// list of transactions
export type TransactionList = TransactionType[] | [];

export type TransactionAction =
    { type: 'DELETE_TRANSACTION', payload: number }
    | { type: 'SET_TRANSACTION', payload: TransactionList }
    | { type: 'ADD_TRANSACTION', payload: TransactionType };

export interface AppContextProps {
    listOfTransactions: TransactionList;
    dispatch: Dispatch<TransactionAction>;
}

// Provider setup
export type AppProviderProps = {
    children: ReactNode;
}
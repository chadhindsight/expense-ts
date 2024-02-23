import { Dispatch } from "react";

// single transaction
export interface Transaction {
    text: string;
    amount: number;
    // how to handle this?
    id: number;
}

// list of transactions
export type TransactionList = Transaction[] | [];

export type TransactionAction =
    { type: 'DELETE_TRANSACTION', payload: number }
    | { type: 'SET_TRANSACTION', payload: TransactionList }
    | { type: 'ADD_TRANSACTION', payload: Transaction };

export interface AppContextProps {
    listOfTransactions: TransactionList;
    dispatch: Dispatch<TransactionAction>;
}

// Import related types
import { TransactionAction, TransactionList } from '../types/transactionTypes';


export const appReducer = (state: TransactionList, action: TransactionAction) => {
    switch (action.type) {
        case 'SET_TRANSACTION':
            return action.payload;

        case 'DELETE_TRANSACTION':
            return state.filter((item) => item.id !== action.payload);
        case 'ADD_TRANSACTION':
            return [...state, action.payload]
        default:
            return state;
    }
};


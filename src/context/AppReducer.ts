// Import related types
import { TransactionAction, TransactionInterfaceList } from '../types/transactionTypes';


export const appReducer = (state: TransactionInterfaceList, action: TransactionAction) => {
    switch (action.type) {
        case 'SET_TRANSACTION':
            return action.payload;

        case 'DELETE_TRANSACTION':
            return state.filter((expenseItem) => expenseItem.id !== action.payload);
        case 'ADD_TRANSACTION':
            return [...state, action.payload]
        default:
            return state;
    }
};


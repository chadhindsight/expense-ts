// single transaction
export interface Transaction {
    text: string;
    amount: number;
    // how to handle this?
    id: number;
}

// transaction list []:
export type TransactionList = Transaction[]; 

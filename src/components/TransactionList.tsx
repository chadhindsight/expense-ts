import { useContext } from 'react';
import { Transaction } from './Transaction';

import { AppContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { listOfTransactions } = useContext(AppContext)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {listOfTransactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}
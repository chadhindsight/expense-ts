import { useContext } from 'react';
import TransactionComp from './TransactionComp';

import { AppContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { listOfTransactions } = useContext(AppContext)

    return (
        <>
            <h3>Transaction History</h3>
            <ul className="list">
                {listOfTransactions.map(transaction => (<TransactionComp key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}
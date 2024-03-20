import { useAppContext } from "../context/GlobalState";
import { TransactionInterface } from "../types/transactionTypes";
import { moneyFormatter } from "../utils/moneyFormatter";

const TransactionComp = ({ transaction }: { transaction: TransactionInterface }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const { dispatch } = useAppContext();

    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'} data-testid="transaction">
            {transaction.text} {sign}{moneyFormatter(transaction.amount)}<button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>

    );
};

export default TransactionComp;
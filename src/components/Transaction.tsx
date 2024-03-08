import { useAppContext } from "../context/GlobalState";
import { TransactionType } from "../types/transactionTypes";
import { moneyFormatter } from "../utils/moneyFormatter";

const TransactionComp = ({ transaction }: { transaction: TransactionType }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const { dispatch } = useAppContext();

    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>

    );
};

export default TransactionComp;
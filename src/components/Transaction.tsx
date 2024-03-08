import { useContext } from "react";
import { AppContext, useAppContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
    const { listOfTransactions } = useContext(AppContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const { dispatch } = useAppContext();

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <>

        </>
    );
};

export default Transaction;
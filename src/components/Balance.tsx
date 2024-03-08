import { useContext } from "react";
import { AppContext } from "../context/GlobalState";
import { moneyFormatter } from "../utils/moneyFormatter";

const Balance = () => {
    const { listOfTransactions } = useContext(AppContext)

    const amounts = listOfTransactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    console.log(listOfTransactions)

    return (
        <>
            <h4>Your Current Balance</h4>
            <h1>{moneyFormatter(total)}</h1>
        </>
    );
};

export default Balance;
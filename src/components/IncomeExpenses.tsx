import { useContext } from "react";
import { AppContext } from "../context/GlobalState";
import { moneyFormatter } from "../utils/moneyFormatter";

export const IncomeExpenses = () => {
    const { listOfTransactions } = useContext(AppContext);
    const amounts = listOfTransactions.map(transaction => transaction.amount);

    // responsible for what gets displayed in the income column
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)

    // responsible for what gets displayed in the expense column
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    );

    return (
        <section className="inc-exp-container">
            <article>
                <header>
                    <h4>Income</h4>
                </header>
                <p className="money plus">{moneyFormatter(income)}</p>
            </article>
            <article>
                <header>
                    <h4>Expense</h4>
                </header>
                <p className="money minus">{moneyFormatter(expense)}</p>
            </article>
        </section>
    )

}

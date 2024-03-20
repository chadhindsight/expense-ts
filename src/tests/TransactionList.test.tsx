import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TransactionList } from '../components/TransactionList';
import { AppContext } from '../context/GlobalState';

test('renders transaction list correctly', () => {
    // Mock the context value
    const mockContextValue = {
        listOfTransactions: [
            { id: 1, text: 'Transaction 1', amount: 50 },
            { id: 2, text: 'Transaction 2', amount: -20 }
        ],
        dispatch: jest.fn() // Provide a dummy function for dispatch
    };

    // Render the TransactionList component with mocked context value
    render(
        <AppContext.Provider value={mockContextValue}>
            <TransactionList />
        </AppContext.Provider>
    );

    // Check if the transaction list heading is rendered
    const headingElement = screen.getByText(/Transaction History/i);
    expect(headingElement).toBeInTheDocument();

    // Check if each transaction component is rendered
    const transactionElements = screen.getAllByTestId('transaction');
    expect(transactionElements.length).toBe(mockContextValue.listOfTransactions.length);

    // Check if transaction details are rendered correctly
    mockContextValue.listOfTransactions.forEach((transaction, index) => {
        const transactionElement = transactionElements[index];
        expect(transactionElement).toHaveTextContent(transaction.text);
        expect(transactionElement).toHaveTextContent(transaction.amount.toString());
    });
});

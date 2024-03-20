import { render, screen } from '@testing-library/react';
import TransactionComp from '../components/TransactionComp'; // Adjust the import path as per your project structure

test('renders transaction details correctly', () => {
    render(<TransactionComp transaction={{ text: 'Test Transaction', amount: -50, id: 1 }} />);

    // Check if transaction details are rendered correctly
    const transactionElement = screen.getByTestId('transaction');

    // Verify that the transaction element contains the expected text
    expect(transactionElement.textContent).toContain('Test Transaction');
});

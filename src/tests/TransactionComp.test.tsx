import { render, screen } from '@testing-library/react';
import TransactionComp from '../components/TransactionComp';
test('renders transaction details correctly', () => {
    render(<TransactionComp transaction={{ text: 'Test Transaction', amount: -50, id: 1 }} />);

    // Check if transaction details are being rendered correctly
    const transactionElement = screen.getByTestId('transaction');

    expect(transactionElement.textContent).toContain('Test Transaction');
});

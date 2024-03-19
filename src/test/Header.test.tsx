import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from '../components/presentational/Header';

describe('Header component', () => {
    it('renders the Header component with the correct content', () => {
        const { getByText } = render(<Header />);
        const headerElement = getByText('Expense Tracker App');
        expect(headerElement).toBeTruthy();
    })
})
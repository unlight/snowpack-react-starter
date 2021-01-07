import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import expect from 'expect';

it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Edit/i);
    expect(linkElement).toBeTruthy();
});

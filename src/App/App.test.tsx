import { render } from '@testing-library/react';
import expect from 'expect';
import * as React from 'react';

import App from './App';

it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/edit/i);
    expect(linkElement).toBeTruthy();
});

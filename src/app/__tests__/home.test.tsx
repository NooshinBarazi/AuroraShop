import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home page', () => {
  it('shows the docs link', () => {
    render(<Home />);
    expect(screen.getByText(/Read our docs/i)).toBeInTheDocument();
  });

  it('has a deploy button', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /Deploy now/i })).toBeVisible();
  });
});

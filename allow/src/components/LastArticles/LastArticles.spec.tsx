import React from 'react';
import { render, screen } from '@testing-library/react';
import LastArticles from './LastArticles';

describe('LastArticles Component', () => {
  it('should render the last articles section with correct titles and dates', () => {
    render(<LastArticles />);
    
    const titles = screen.getAllByRole('heading', { level: 3 });
    const dates = screen.getAllByText(/29\/03\/\d{4}/i);

    expect(titles.length).toBe(3);
    expect(dates.length).toBe(3);
  });
});

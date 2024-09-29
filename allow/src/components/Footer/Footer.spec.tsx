import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render the footer with copyright information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Copyright ©️ 2023 AllowMe News/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

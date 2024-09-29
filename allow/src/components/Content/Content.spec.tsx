import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content Component', () => {
  const props = {
    title: 'Test Title',
    author: 'Test Author',
    date: '2023-01-01',
    subtitle: 'This is a subtitle',
  };

  test('renders author name', () => {
    render(<Content {...props} />);
    const authorElement = screen.getByText(/Test Author/i);
    expect(authorElement).toBeInTheDocument();
  });

  test('renders date', () => {
    render(<Content {...props} />);
    const dateElement = screen.getByText(/2023-01-01/i);
    expect(dateElement).toBeInTheDocument();
  });

  test('renders title', () => {
    render(<Content {...props} />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    render(<Content {...props} />);
    const subtitleElement = screen.getByText(/This is a subtitle/i);
    expect(subtitleElement).toBeInTheDocument();
  });
});

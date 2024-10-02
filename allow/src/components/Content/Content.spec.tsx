import { render, screen } from '@testing-library/react';
import Content from './Content';
import type { ContentArticle } from '../../interfaces';

describe('Content Component', () => {
  const mockArticles: ContentArticle[] = [
    {
      title: 'Test Title',
      author: 'Test Author',
      publicationDate: '2023-01-01',
      subtitle: 'This is a subtitle',
      content: 'This is the content of the article',
    },
  ];

  const props = {
    articles: mockArticles,
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

  test('renders content', () => {
    render(<Content {...props} />);
    const contentElement = screen.getByText(/This is the content of the article/i);
    expect(contentElement).toBeInTheDocument();
  });
});

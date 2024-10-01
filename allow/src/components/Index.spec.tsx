import { render, screen } from '@testing-library/react';
import Index from './Index';

describe('Index Component', () => {
  it('should render all components including Header, Footer, Content, and LastArticles', () => {
    render(<Index />);
    
    expect(screen.getByText(/Copyright ©️ 2023 AllowMe News/i)).toBeInTheDocument();
    expect(screen.getByText(/Mostrar todos os autores/i)).toBeInTheDocument();
    expect(screen.getByText(/Últimas notícias/i)).toBeInTheDocument();
  });
});

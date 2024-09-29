import React, { useState } from 'react';
import '../App.css';
import type { Article } from '../interfaces';
import LastArticles from './LastArticles/LastArticles';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import Header from './Header/Header';

function Index() {
  const [articles] = useState<Article[]>([
    {
      title: "Sang Lose",
      author: "Pedro Goulart",
      date: "2001-03-29",
      subtitle: "subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
    },
    {
      title: "Second Article",
      author: "Author Two",
      date: "2021-04-10",
      subtitle: "Some interesting details about the second article."
    },
    {
      title: "Third Article",
      author: "Author Three",
      date: "2023-07-18",
      subtitle: "This is the third article's subtitle."
    },
  ]);

  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleAuthorFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthor(e.target.value);
  };

  const handleSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const filteredArticles = selectedAuthor
    ? articles.filter((article) => article.author === selectedAuthor)
    : articles;

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortOrder === "desc") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });  

  return (
    <>
      <Header />

      <div className="select-container">
 
        <select className="custom-select" onChange={handleAuthorFilter} value={selectedAuthor}>
          <option value="">Mostrar todos os autores</option>
          <option value="Pedro Goulart">Pedro Goulart</option>
          <option value="Author Two">Author Two</option>
          <option value="Author Three">Author Three</option>
        </select>


        <select className="custom-select" onChange={handleSortOrder} value={sortOrder}>
          <option value="">Ordenar por</option>
          <option value="asc">Data - Crescente</option>
          <option value="desc">Data - Decrescente</option>
        </select>
      </div>

      <div className="container">
        <div className="content-section">
          <hr />
          {sortedArticles.map((article, index) => (
            <div key={index}>
              <Content
                title={article.title}
                author={article.author}
                date={article.date}
                subtitle={article.subtitle}
              />
              <hr />
            </div>
          ))}
        </div>

        <LastArticles />
      </div>

      <Footer />
    </>
  );
}

export default Index;

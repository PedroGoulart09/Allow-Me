import React, { useState } from 'react';
import '../App.css';
import type { Article } from '../interfaces';
import LastArticles from './LastArticles/LastArticles';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import Header from './Header/Header';
import { useContent } from '../hooks/useContent';

function Index() {
  const { content, authors } = useContent();
  

  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleAuthorFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthor(e.target.value);
  };

  const handleSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const selectedAuthorData = authors.find((author) => author.authorId === selectedAuthor);
  const publicationIds = selectedAuthorData ? selectedAuthorData.publicationIds : [];

  const filteredArticles = selectedAuthor
    ? content.filter((article) => publicationIds.includes(article.publicationId))
    : content;

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime();
    } else if (sortOrder === "desc") {
      return new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime();
    }
    return 0;
  });

  return (
    <>
      <Header />

      <div className="select-container">

        <select className="custom-select" onChange={handleAuthorFilter} value={selectedAuthor}>
          <option value="">Mostrar todos os autores</option>
          {Array.from(new Set(authors.map(({ authorId }) => authorId))).map((authorId) => (
            <option key={authorId} value={authorId}>
              {authorId}
            </option>
          ))}
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
         
            <div >
              <Content
                articles={sortedArticles}
              />
           
            </div>
       
        </div>

        <LastArticles />
      </div>

      <Footer />
    </>
  );
}

export default Index;

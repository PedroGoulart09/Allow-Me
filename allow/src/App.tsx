import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import LastArticles from './components/LastArticles';

function App() {
  return (
    <>
      <Header />

      <div className="select-container">
        <select className="custom-select">
          <option value="" disabled selected>Filtrar por autor</option>
          <option value="autor1">Autor 1</option>
          <option value="autor2">Autor 2</option>
          <option value="autor3">Autor 3</option>
        </select>

        <select className="custom-select">
          <option value="" disabled selected>Ordenar por</option>
          <option value="nome">Nome</option>
          <option value="data">Data</option>
          <option value="popularidade">Popularidade</option>
        </select>
      </div>

      <div className="container">
        <div className="content-section">

          <hr />
          <Content
            title="Sang Lose"
            author="Pedro Goulart"
            date="29/03/2001"
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
          />
           <hr />
          <Content
            title="Sang Lose"
            author="Pedro Goulart"
            date="29/03/2001"
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
          />
           <hr />
          <Content
            title="Sang Lose"
            author="Pedro Goulart"
            date="29/03/2001"
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
          />
           <hr />
          <Content
            title="Sang Lose"
            author="Pedro Goulart"
            date="29/03/2001"
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
          />
           <hr />
          <Content
            title="Sang Lose"
            author="Pedro Goulart"
            date="29/03/2001"
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
          /> <hr />
          <Content
            title="Sang Lose"
            author="Pedro Goulart"
            date="29/03/2001"
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
          /> <hr />
          <Content
            title="Sang Lose"
            author="Pedro Goulart"
            date="29/03/2001"
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle"
          />

        </div>

        <LastArticles />
      </div>


      <Footer />

    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwAjENpDBsnhb91rzlQxF39KqlCZxHqHVig&s" alt="" style={{ width: '80px' }} />
      </header>

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

      <hr />

      <Content
        title={'Sang Lose'}
        author={'Pedro Goulart'}
        date={'29/03/2001'}
        subtitle={'subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle'}

      />

      <hr />

      <Content
        title={'Sang Lose'}
        author={'Pedro Goulart'}
        date={'29/03/2001'}
        subtitle={'subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle'}

      />

      < hr />
      <Content
        title={'Sang Lose'}
        author={'Pedro Goulart'}
        date={'29/03/2001'}
        subtitle={'subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle'}

      />

      <Footer/>
    </>
  );
}

export default App;

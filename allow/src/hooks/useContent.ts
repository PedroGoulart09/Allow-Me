import { useEffect, useState } from "react";

export const useContent = () => {
  const [content, setContent] = useState<any[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/297932b2-1303-4136-bbd1-cb20875bf87c')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Erro ao buscar publicações:', error));

  fetch('https://run.mocky.io/v3/7342bcfd-4fe6-470e-a6df-610afebf9b65')
      .then(response => response.json())
      .then(data => setAuthors(data.authorPublications))
      .catch(error => console.error('Erro ao buscar autores:', error));
  }, []);

  return { content, authors };
};

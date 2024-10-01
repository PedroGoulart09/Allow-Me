import { useEffect, useState } from "react";

export const useContent = () => {
  const [content, setContent] = useState<any[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/6e82aa06-6df4-4a08-98e7-052e0230aec4')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Erro ao buscar publicações:', error));

  fetch('https://run.mocky.io/v3/19af9f60-b590-46af-8c89-801f2dbbcf9f')
      .then(response => response.json())
      .then(data => setAuthors(data.authorPublications))
      .catch(error => console.error('Erro ao buscar autores:', error));
  }, []);

  return { content, authors };
};

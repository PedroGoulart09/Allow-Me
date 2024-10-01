import { useContent } from "../../hooks/useContent";
import { sortedArticles } from "../utils/function";

export default function LastArticles() {
  const { content } = useContent();

  return (
    <aside className="articleAside">
      <h1 className="titleLastArticle">Últimas notícias</h1>
      {sortedArticles(content).map((article: any, index: any) => (
        <div className="infoLastArticle" key={index}>
          <h3>{article.title}</h3>
          <p style={{ color: 'red' }}>{new Date(article.publicationDate).toLocaleDateString()}</p>
        </div>
      ))}
    </aside>
  );
}

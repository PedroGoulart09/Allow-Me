import { FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';
import '../../App.css';
import type { ContentArticle } from '../../interfaces';

export default function Content({ articles }: { articles: ContentArticle[] }) {

  
  return (
    <section className="content-section">
      {articles.map((contentArticle, index) => (
        <div key={index} className="article">
          <div className="title-icons">
            <h3 className="author">{contentArticle.author}</h3>
            <div className="icons">
              {contentArticle.socialMedia?.linkedin && (
                <a href={contentArticle.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" />
                </a>
              )}
              {contentArticle.socialMedia?.twitter && (
                <a href={contentArticle.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="icon" />
                </a>
              )}
              {contentArticle.socialMedia?.originalPostUrl && (
                <a href={contentArticle.socialMedia.originalPostUrl} target="_blank" rel="noopener noreferrer">
                  <FaLink className="icon" />
                </a>
              )}
            </div>
          </div>
          <p className="date">{contentArticle.publicationDate}</p>
          <h1>{contentArticle.title}</h1>
          <p className="subtitle">{contentArticle.subtitle}</p>
          <p>{contentArticle.content}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}

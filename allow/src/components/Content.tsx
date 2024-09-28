import React from 'react'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../App.css'


interface ContentArticle {
  title: String;
  author: String;
  date: String;
  subtitle: String;
}

export default function Content({ title, author, date, subtitle }: ContentArticle) {
  return (
    <section className="content-section">
      <div className="title-icons">
        <h3 className="author">{author}</h3>
        <div className="icons">
          <FaLinkedin className="icon" />
          <FaTwitter className="icon" />
          <FaFacebook className="icon" />
        </div>
      </div>

      <p className="subtitle">{date}</p>
      <h1>{title}</h1>
      <p className="subtitle">
        {subtitle}
      </p>
    </section>
  )
}

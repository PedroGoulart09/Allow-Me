export interface SocialMedia {
  linkedin?: string;
  twitter?: string;
  originalPostUrl?: string;
}

export interface ContentArticle {
  title: string;
  author: string;
  publicationDate: string;
  subtitle: string;
  content: string;
  socialMedia?: SocialMedia;
}


export interface Article {
  title: string;
  author: string;
  date: string;
  subtitle: string;
}
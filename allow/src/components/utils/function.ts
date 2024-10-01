export const sortedArticles = (content: any) => {
  return content.slice()
   .sort((a: any, b: any) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
   .slice(0, 3);
}

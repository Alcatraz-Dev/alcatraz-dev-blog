import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 900px;
  margin: 0 auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 3rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
        color: var(--secondary);
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--secondary);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1rem 0;
      font-size: 2.5rem;
    }
   
   
    ul {
      margin: 1rem ;
      font-size: 1.4rem;
      color:#E0E0E0;
      list-style-type:'✨';
    }
  ol {
      margin: 1rem ;
      font-size: 1.4rem;
      color:#E0E0E0;
     
    }
    a{
      margin: 1rem ;
      font-size: 1.4rem;
      text-decoration:underline;
      text-decoration-color:#33B1FF;
    }
    blockquote,
   {
      margin: 1rem ;
     
      color: var (--primary);
      
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2.5rem;
    }
  }
`;

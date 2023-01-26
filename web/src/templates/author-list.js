import  {graphql}  from 'gatsby';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import PageSpace from '../components/PageSpace';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import AuthorGrid from '../components/author/AuthorGrid';
import Pagination from '../components/Pagination';

export const AuthorsQuery = graphql`
  query authorsQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const [text] = useTypewriter({
    words: [
      'As a development blog author, it is crucial to maintain a strong understanding of the latest advancements and trends within the industry. ',
      'This not only enhances the relevancy and utility of your content to your readers, but it also positions you as a thought leader in the field. ',
      'Additionally, it is important to focus on providing concrete and actionable information that readers can immediately apply to their own projects. ',
      ' Furthermore, actively engaging with your readers through comments and incorporating their feedback into your content is key to building a strong and dedicated readership.',
    ],
    loop: true,
  });
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;
  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Authors" />
      <div className="container">
        <PageHeader
          title="All Authors"
          description={
            <span>
              {text}
              <Cursor
                cursorStyle="✒️"
                cursorColor="#81B622"
                typeSpeed="70"
                deleteSpeed="50"
                delaySpeed="2500"
              />
            </span>
          }
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/authors"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;

import { graphql } from 'gatsby';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const BlogsQuery = graphql`
query blogListQuery($limit: Int!, $offset: Int!) {
  allSanityBlog(sort: {publishedAt: DESC}, limit: $limit, skip: $offset) {
    nodes {
      id
      title
      publishedAt
      slug {
        current
      }
      categories {
        title
        slug {
          current
        }
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
}
`;
function BlogList({ data, pageContext }) {
  const [text] = useTypewriter({
    words: [
      'A development blog is a digital platform that serves as a medium for documenting the progress and procedures of software, application, or technology product development. It provides insights on the design, planning, and implementation phases of the development process. ',
      'Additionally, it also highlights any challenges or issues encountered during the development and how they were addressed.',
      'This blog is usually maintained by the development team or an individual developer and serves as a valuable communication tool with stakeholders, clients, and the public. ',
      ' Furthermore, it also serves as a reference material for other developers seeking knowledge on specific technologies or development methodologies.',
    ],
    loop: true,
  });

  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;
  return (
    <>
      <SEO title="Blogs" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Blog Posts"
            description={
              <span>
                {text}
                <Cursor
                  cursorStyle="📜"
                  cursorColor="#81B622"
                  typeSpeed="70"
                  deleteSpeed="50"
                  delaySpeed="2500"
                />
              </span>
            }
          />

          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/blogs"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default BlogList;

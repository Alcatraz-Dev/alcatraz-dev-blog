import  {graphql } from 'gatsby';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';

export const CategoryListQuery = graphql`
query categoriesQuery($limit: Int!, $offset: Int!) {
  allSanityCategory(sort: {_createdAt: DESC}, limit: $limit, skip: $offset) {
    nodes {
      id
      title
      slug {
        current
      }
      _rawDescription
    }
  }
}
`;

function CategoryList({ data, pageContext }) {
  const [text] = useTypewriter({
    words: [
      'Web Development: This category covers topics such as HTML, CSS, JavaScript, and front-end frameworks like React and Angular.',
      'Mobile Development: This category covers topics such as iOS and Android app development, using frameworks like React Native and Flutter.',
      'Cloud Computing: This category covers topics such as AWS, Azure, Google Cloud, and other cloud platforms and services.',
      'Artificial Intelligence and Machine Learning: This category covers topics such as neural networks, computer vision, natural language processing, and other AI-related technologies.',
      'DevOps and Continuous Integration: This category covers topics such as containerization, automation, and other best practices for software development and deployment.',
      'Software Design and Architecture: This category covers topics such as design patterns, SOLID principles, and software architecture.',
      'Debugging and Troubleshooting: This category covers topics such as debugging techniques, error handling, and performance optimization.',
      'Career and Professional Development: This category covers topics such as career advancement, job search, and personal development for developers.',
      'Game Development:. This category covers topics such as game engines, game physics, game design, game development frameworks, game monetization, and virtual reality and augmented reality. Game development is a multidisciplinary field that includes areas such as computer graphics, physics, mathematics, audio engineering, and more. The game industry is continuously growing and evolving, by providing tips, best practices, and tutorials on game development, a blog can help game developers to stay up to date with the latest technologies and trends in the industry. ',
    ],
    loop: true,
  });
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;
  return (
    <>
      <SEO title="Categories" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Categories"
            description={
              <span>
                {text}
                <Cursor
                  cursorStyle="🗂️"
                  cursorColor="#81B622"
                  typeSpeed="70"
                  deleteSpeed="50"
                  delaySpeed="2500"
                />
              </span>
            }
          />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/categories"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default CategoryList;

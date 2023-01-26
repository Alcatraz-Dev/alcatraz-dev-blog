import React from 'react';
import { graphql} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PageSpace from '../components/PageSpace';
import { SingleCategoryStyles } from '../styles/category/SingleCategoryStyles';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import MyPortableText from '../components/MyPortableText';
import BlogGrid from '../components/blog/BlogGrid';
export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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

function SingleCategory({ data }) {
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;
  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={category.title} />
          <PageHeader title={category.title} className="pageHeader">
    
              <MyPortableText value={category._rawDescription} />

            <GatsbyImage
              image={category.coverImage.asset.gatsbyImageData}
              className="coverImage"
              alt={category.coverImage.alt}
            />
          </PageHeader>
          <BlogGrid blogs={blogs} />
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;

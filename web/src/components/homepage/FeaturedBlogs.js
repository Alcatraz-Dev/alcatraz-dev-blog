import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blog/BlogGrid';

function FeaturedBlogs() {
  const [text] = useTypewriter({
    words: [
      'Welcome to our development blog, where we provide our readers with the latest updates and advancements in the field of technology.',
      'Our experienced team of developers and experts offer in-depth analysis and commentary on the most relevant topics, including the use of cutting-edge tools and software development methodologies. ',
      'We cover a wide range of industries, providing valuable insights for both seasoned professionals and those new to the field.',
      'Our goal is to be a reliable and informative resource for staying current in the rapidly changing world of development.',
      'We invite you to join us in our exploration of the latest trends and developments in the industry.',
    ],
    loop: true,
  })
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
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
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        <span>
          {text}
          <Cursor
            cursorStyle="|"
            cursorColor="#81B622"
            typeSpeed="70"
            deleteSpeed="50"
            delaySpeed="2500"
          />
        </span>
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;


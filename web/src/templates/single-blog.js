import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { format } from 'date-fns';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { Embed } from 'hyvor-talk-react';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import { Title } from '../components/typography/Title';
import ParagraphText from '../components/typography/ParagraphText';
import MyPortableText from '../components/MyPortableText';
import Share from '../constants/shear';
import SupportButtons from '../constants/supportbuttons';
import CommunityButtons from '../constants/communitybuttons';
export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;
function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  const url= typeof window !=='undefined' ? window.location.href:'';
  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage
              image={blog.coverImage.asset.gatsbyImageData}
              alt={blog.coverImage.alt}
              className="blog-cover-image"
            />
            <Title className="title">{blog.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.publishedAt), 'p, MMM dd yyyy')}
            </ParagraphText>
            <ParagraphText className="categoriesText">
              <BiCategory />
              <span>
                {blog.categories.map((item, index) => (
                  <span key={item.slug.current}>
                    <Link to={`/categories/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.categories.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            </ParagraphText>
            <ParagraphText className="author">
              <FiUser />
              <Link to={`/authors/${blog.author.slug.current}`}>
                {blog.author.name}
              </Link>
            </ParagraphText>
          </div>
          <hr className="hr" />
          <div className="body">
            <MyPortableText  value={blog._rawBody} />
          </div>
          {/* <div className="container">
            <div>
              <Embed websiteId={8320} id={false} />
            </div>
          </div> */}
          <div className="container">
            <div>
             <Share url={url} desc={blog.title}/>
            </div>
          </div>
          <div className="container">
            <div>
             <SupportButtons/>
            </div>
          </div>
          <div className="container">
            <div>
             <CommunityButtons/>
            </div>
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default SingleBlog;

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';

function AuthorItem({ profileImage, name, slug }) {
  return (
    <AuthorItemStyles to={slug.current} className="author-item">
      <GatsbyImage
        image={profileImage.asset.gatsbyImageData}
        alt={profileImage.asset.alt}
        class="profileImage"
      />
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;

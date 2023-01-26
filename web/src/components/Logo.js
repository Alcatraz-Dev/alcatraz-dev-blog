import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <StaticImage src="../images/LogoImage.png" width={50} alt="logo" />
    </LogoStyles>
  );
}

export default Logo;

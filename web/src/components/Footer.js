import React from 'react';
import { Link } from 'gatsby';

import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          This blog is dedicated to all things web development, as seen through
          the eyes of Alcatraz dev, a Full Stack Developer. Here you'll find a
          variety of articles, tutorials, and tips on the latest web development
          technologies and best practices, as well as insights and experiences
          from Alcatraz dev's own journey as a developer. Whether you're a
          beginner or an experienced developer, this blog is a valuable resource
          for anyone interested in web development.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank">{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          ©️ Alcatraz Dev Blog Creative {new Date().getFullYear()}. All rights
          reserved.
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;

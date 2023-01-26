import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  const [text] = useTypewriter({
    words: [
      'The Alcatraz development team is pleased to present our official development blog. ',
      'Our goal is to keep our users informed and up-to-date on the progress of our platform and its features.',
      'As a team of seasoned developers, we are committed to utilizing advanced technology and industry best practices to deliver a highly secure and intuitive user experience.',
      'Join us as we continue to push the limits of software development and shape the future of our field.',
    ],
    loop: true,
  });
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Explore The world with technology</h1>
            <ParagraphText className="hero__text">
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
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/arian.jpg"
              alt="arian"
              width={1200}
              placeholder="blurred "
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;

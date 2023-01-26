import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import TopCategories from '../components/homepage/TopCategories';
import { Script } from 'gatsby';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
      {/* <Script src="https://apps.elfsight.com/p/platform.js" defer></Script>
<div class="elfsight-app-f835b851-094f-47ea-ae94-bfc26c291d02"></div> */}
    </div>
  </>
);
export default IndexPage;

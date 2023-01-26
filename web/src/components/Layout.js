import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../context/searchModalContext';
import { Script } from 'gatsby';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search />
      <Header />
      {children}
      {/* join button */}
      {/* <Script src="https://apps.elfsight.com/p/platform.js" defer></Script>
       <div class="elfsight-app-614473b7-e9f4-463d-a53f-0dc018afa9d1"></div> */}
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;

import React, { createContext, useMemo, useState } from 'react';

const SearchModalContext = createContext();

const SearchModalContextProvider = ({ children }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState();
  const initiaValue = useMemo(
    () => ({
      isSearchModalOpen,
      openSearchModal: () => {
        setIsSearchModalOpen(true);
      },
      closeSearchModal: () => {
        setIsSearchModalOpen(false);
      },
    }),
    [isSearchModalOpen]
  );
  return (
    <SearchModalContext.Provider value={initiaValue}>
      {children}
    </SearchModalContext.Provider>
  );
};
export { SearchModalContext, SearchModalContextProvider };

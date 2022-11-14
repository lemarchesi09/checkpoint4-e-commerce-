import React, { useState } from "react";

export const userContext = React.createContext();

export const useUserContext = () => {
  return React.useContext(userContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [searchProducts, setSearchProducts] = useState([]);
  return (
    <userContext.Provider
      value={{ user, setUser, searchProducts, setSearchProducts }}
    >
      {children}
    </userContext.Provider>
  );
};

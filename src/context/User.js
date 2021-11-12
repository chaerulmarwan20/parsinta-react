import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

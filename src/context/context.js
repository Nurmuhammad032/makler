import { createContext, useState, useEffect } from "react";
import { getRequests } from "../requests/requests";

const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getRequests().then((data) => setData(data));
  }, []);


  return (
    <ContextApp.Provider value={{ ...data }}>{children}</ContextApp.Provider>
  );
};

export default ContextApp;

import { createContext, useState, useEffect } from "react";
import { getRequests } from "../requests/requests";

const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const loginModalFunc = (newState) => {
    setOpenLoginModal(newState);
  };

  useEffect(() => {
    getRequests().then((data) => setData(data));
  }, []);

  return (
    <ContextApp.Provider value={{ ...data, loginModalFunc, openLoginModal }}>{children}</ContextApp.Provider>
  );
};

export default ContextApp;

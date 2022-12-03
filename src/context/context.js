import { createContext, useState, useEffect } from "react";
import { getRequests } from "../requests/requests";

const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [userData, setUserData] = useState();

  const loginModalFunc = (newState) => {
    setOpenLoginModal(newState);
  };
  const getUserData = (newState) => {
    setUserData(newState);
  };

  useEffect(() => {
    getRequests().then((data) => setData(data));
  }, []);

  return (
    <ContextApp.Provider
      value={{ ...data, loginModalFunc, openLoginModal, userData, getUserData }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default ContextApp;

import { useStepContext } from "@mui/material";
import { createContext, useState, useEffect } from "react";
import { getRequests } from "../requests/requests";

const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [userData, setUserData] = useState();
  const [houseData, setHouseData] = useState();
  const [userId, setUserId] = useState();

  const loginModalFunc = (newState) => {
    setOpenLoginModal(newState);
  };
  const getUserData = (newState) => {
    setUserData(newState);
  };
  const getUserId = (newState) => {
    setUserId(newState);
  };
  const getHouseData = (newState) => {
    setHouseData(newState);
  };

  useEffect(() => {
    getRequests().then((data) => setData(data));
  }, []);

  return (
    <ContextApp.Provider
      value={{
        ...data,
        loginModalFunc,
        openLoginModal,
        userData,
        getUserData,
        getHouseData,
        getUserId,
        houseData,
        userId,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default ContextApp;

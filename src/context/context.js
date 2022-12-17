import { useStepContext } from "@mui/material";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseURL, getRequests } from "../requests/requests";

const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [userData, setUserData] = useState();
  const [homeHouses, setHomeHouses] = useState();
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

  const homeHousesFilter = (newState) => {
    setHomeHouses(newState);
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
        homeHousesFilter,
        homeHouses,
        houseData,
        userId,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default ContextApp;

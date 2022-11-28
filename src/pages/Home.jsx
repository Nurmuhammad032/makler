import { useEffect, useState } from "react";
import {
  Categories,
  DownloadApp,
  Filter,
  FooterMenu,
  Houses,
  UserCard,
} from "../components";

const Home = () => {
  return (
    <>
    
      <Filter />
      <Categories />
      <Houses />
      <FooterMenu />
      <DownloadApp />
    </>
  );
};

export default Home;

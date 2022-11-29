import {
  Categories,
  DownloadApp,
  Filter,
  FooterMenu,
  Houses,
  ProductSingle,
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

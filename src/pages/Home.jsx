import {
  Categories,
  DownloadApp,
  Filter,
  FooterMenu,
  Houses,
  ProductPage,
} from "../components";

const Home = () => {
  return (
    <>
      <ProductPage/>
      <Filter />
      <Categories />
      <Houses />
      <FooterMenu />
      <DownloadApp />
    </>
  );
};

export default Home;

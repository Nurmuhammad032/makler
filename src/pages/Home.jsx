import {
  Categories,
  DownloadApp,
  EditPage,
  Filter,
  FooterMenu,
  Houses,
  ProductSingle,
} from "../components";

const Home = () => {
  return (
    <>
    <EditPage/>
      <Filter />
      <Categories />
      <Houses />
      <FooterMenu />
      <DownloadApp />
    </>
  );
};

export default Home;

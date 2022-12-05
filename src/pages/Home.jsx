import {
  Categories,
  DownloadApp,
  EditPage,
  Filter,
  FooterMenu,
  Houses,
  ProductSingle,
} from "../components";
import BookInput from "./BookInput/BookInput";
import CreateIndustriya from "./CreateIndustriya/CreateIndustriya";

const Home = () => {
  return (
    <>
    <BookInput/>
    
    {/* <CreateIndustriya/> */}
      <Filter />
      <Categories />
      <Houses />
      <FooterMenu />
      <DownloadApp />
    </>
  );
};

export default Home;

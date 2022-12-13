import { fabClasses } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  Categories,
  DownloadApp,
  EditPage,
  Filter,
  FooterMenu,
  Houses,
  LoginModal,
  ProductSingle,
  SearchResults,
} from "../components";
import ContextApp from "../context/context";
import useForm from "../hooks/useForm";
import { baseURL } from "../requests/requests";

const Home = () => {
  const { form, changeHandler } = useForm({
    typeRoom: "",
    room: "",
    building: "",
    search: "",
  });

  console.log(form);
  const [start, setStart] = useState(1);
  const [focus, setFocus] = useState(false);
  const { openLoginModal } = useContext(ContextApp);
  const [searchData, setSearchData] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //  searchData?.splice(0, 8);
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(
  //       `${baseURL}/products/web/api/v1/web-houses/search/?search=${form.search}`
  //     )
  //     .then((res) => setSearchData(res.data.results))
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [form.search]);

  // console.log(form.search.length);

  return (
    <>
      <Filter
        value={form}
        change={changeHandler}
        start={setStart}
        setFocus={setFocus}
      />
      {/* {form.search.length ? <SearchResults data={searchData} loading={loading} /> : ""} */}
      <Categories />
      <Houses value={form} start={start} focus={focus} />
      <FooterMenu />
      <DownloadApp />
    </>
  );
};

export default Home;

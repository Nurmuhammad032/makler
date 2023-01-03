import { fabClasses } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  BannerCarousel,
  Categories,
  DownloadApp,
  EditPage,
  Filter,
  FooterMenu,
  Houses,
} from "../components";
import useForm from "../hooks/useForm";

const Home = () => {
  const { form, changeHandler } = useForm({
    typeRoom: "",
    room: "",
    building: "",
    search: "",
  });

  const [start, setStart] = useState(1);
  const [focus, setFocus] = useState(false);

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
      {/* <Filter
        value={form}
        change={changeHandler}
        start={setStart}
        setFocus={setFocus}
      /> */}
      {/* {form.search.length ? <SearchResults data={searchData} loading={loading} /> : ""} */}
      <BannerCarousel />
      <Categories />
      <Houses value={form} start={start} focus={focus} />
      <FooterMenu />
      <DownloadApp />
    </>
  );
};

export default Home;

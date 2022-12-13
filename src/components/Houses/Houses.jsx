import { useContext, useMemo, useState } from "react";
import ContextApp from "../../context/context";

import sprite from "../../assets/img/symbol/sprite.svg";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "../../requests/requests";
import Loading from "../Loading/Loading";

const Houses = ({ value, start, focus }) => {
  const { typeRoom, room, search, building } = value;
  const { allHouses, houseData } = useContext(ContextApp);
  const [displayData, setDisplayData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(8);
  const [searchLimit, setSearchLimit] = useState(8);
  const [url, setUrl] = useState(
    `https://fathulla.tk/products/web/api/v1/all-web-houses/?limit=${limit}&offset=4`
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/products/web/api/v1/web-houses/search/?search=${search}`)
      .then((res) => setSearchData(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  const init = async () => {
    setLoading(true);

    const res = await axios.get(
      `https://fathulla.tk/products/web/api/v1/all-web-houses/`
    );

    setDisplayData(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    setLoading(false);
  };

  const init2 = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://fathulla.tk/products/web/api/v1/all-web-houses/?limit=${limit}&product_status=&object=${building}&building_type=&number_of_rooms=${room}&type=${typeRoom}&rental_type=`
    );

    setDisplayData(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  useMemo(() => {
    init2();
  }, [url, typeRoom, room, building, start]);

  const handleNext = () => {
    setUrl(nextUrl);
  };

  const handlePrev = () => {
    setUrl(prevUrl);
  };

  console.log(displayData.length);

  const handleLoad = () => {
    if (!search) {
      setLimit((prev) => (prev += 8));
    } else {
      setSearchLimit((prev) => (prev += 8));
    }
  };

  return (
    <section className="cards-s">
      <div className="container">
        <div className="cards">
          <div className="cards-head">
            <h4>Рекомендованные ЖК</h4>
            <ul>
              <li>
                {" "}
                <div
                  style={{
                    width: "1rem",
                  }}
                >
                  {prevUrl && (
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={handlePrev}
                    >
                      <svg className="svg-sprite-icon icon-fi_chevron-left w-12">
                        <use href={`${sprite}#fi_chevron-left`}></use>
                      </svg>
                    </a>
                  )}
                </div>
              </li>
              <li>
                {" "}
                <div
                  style={{
                    width: "1rem",
                  }}
                >
                  {nextUrl && (
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={handleNext}
                    >
                      <svg className="svg-sprite-icon icon-fi_chevron-left w-12">
                        <use href={`${sprite}#fi_chevron-left`}></use>
                      </svg>
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>
          {!loading ? (
            <ul className="cards-list" id="houses-list">
              {!search.length ? (
                displayData.length ? (
                  displayData
                    ?.slice(0, limit)
                    ?.map((item) => <ProductCard key={item.id} data={item} />)
                ) : (
                  <h1>hech narsa yo'q hali</h1>
                )
              ) : searchData.length ? (
                searchData
                  ?.slice(0, searchLimit)
                  ?.map((item) => <ProductCard key={item.id} data={item} />)
              ) : (
                <h1>Items not found!</h1>
              )}
            </ul>
          ) : (
            <Loading />
          )}

          <button
            onClick={handleLoad}
            className="btn btn-big btn-white"
            id="show-more"
          >
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
};

export default Houses;

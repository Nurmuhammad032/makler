import { useContext, useState } from "react";
import ContextApp from "../../context/context";
import sprite from "../../assets/img/symbol/sprite.svg";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useEffect } from "react";

const Houses = () => {
  const { allHouses, houseData } = useContext(ContextApp);
  const [displayData, setDisplayData] = useState([]);
  const [limit, setLimit] = useState(8);
  const [load, setLoad] = useState([]);
  // const displayData = [];
  const [url, setUrl] = useState(
    `https://fathulla.tk/products/web/api/v1/all-web-houses/?limit=${limit}&offset=4`
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const init = async () => {
    const res = await axios.get(`https://fathulla.tk/products/web/api/v1/all-web-houses/?limit=${limit}&offset=4`);

    setDisplayData(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    console.log(res);
  };
  // console.log(displayData);

  useEffect(() => {
    init();
  }, [limit, url]);

  const handleNext = () => {
    setUrl(nextUrl);
  };

  const handlePrev = () => {
    setUrl(prevUrl);
  };

  const handleLoad = () => {
    setLimit((prev) => (prev += 8));
  };
  console.log(url)

  let data = [];
  useEffect(() => {
    data.push("jfsdlkfjsalkdj");
  }, [displayData]);
  console.log(data);
  // console.log();

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
          <ul className="cards-list" id="houses-list">
            {displayData &&
              displayData?.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
          </ul>
          <button onClick={handleLoad} className="btn btn-big btn-white" id="show-more">
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
};

export default Houses;

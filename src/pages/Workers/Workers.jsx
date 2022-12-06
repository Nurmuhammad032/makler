import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FilterWorker, UserCard } from "../../components";
import sprite from "../../assets/img/symbol/sprite.svg";
import ContextApp from "../../context/context";

const Workers = () => {
  const { masters } = useContext(ContextApp);

  const [displayData, setDisplayData] = useState("");
  const [url, setUrl] = useState("https://fathulla.tk/master/api/v1/maklers/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  // const init = async () => {
  //   const res = await axios.get(url);

  //   setDisplayData(res.data.results);
  //   setNextUrl(res.data.next);
  //   setPrevUrl(res.data.previous);
  //   console.log(res);
  // };
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    axios
      .get(`https://fathulla.tk/master/api/v1/maklers/?limit=${limit}`)
      .then((data) => setDisplayData(data.data.results))
      .catch((err) => console.log(err));
  }, [limit]);

  // const handleNext = () => {
  //   setUrl(nextUrl);
  // };

  // const handlePrev = () => {
  //   setUrl(prevUrl);
  // };

  return (
    <section className="content">
      <div className="container">
        <div>
          <FilterWorker />
          <div className="cards-s">
            <div className="cards-head">
              {/* <ul>
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
              </ul> */}
            </div>
          </div>
          <div className="app__cards--wrapper">
            {displayData &&
              displayData?.map((data, i) => (
                <div
                  key={i}
                  style={{
                    marginRight: "0.5rem",
                  }}
                >
                  <UserCard data={data} />
                </div>
              ))}
          </div>
        </div>
        <button
          onClick={() => setLimit((prev) => (prev += 6))}
          className="btn btn-big btn-white"
          id="show-more"
          style={{
            margin: "4rem auto",
          }}
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
};

export default Workers;

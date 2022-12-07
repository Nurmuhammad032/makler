import { Map, YMaps } from "@pbe/react-yandex-maps";
import { useEffect, useRef, useState } from "react";
import spirite from "../../assets/img/symbol/sprite.svg";

const FilterWorker = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [mapConstructor, setMapConstructor] = useState(null);
  const [state, setState] = useState(null);
  const searchRef = useRef(null);

  // useEffect(() => {
  //   if (mapConstructor) {
  //     new mapConstructor.SuggestView(searchRef.current).events.add(
  //       "select",
  //       function (e) {
  //         const selectedName = e.get("item")?.value;
  //         mapConstructor?.geocode(selectedName).then((result) => {
  //           const newCoords = result?.geoObjects
  //             ?.get(0)
  //             ?.geometry?.getCoordinates();
  //           setState((prevState) => ({ ...prevState, center: newCoords }));
  //         });
  //       }
  //     );
  //   }
  // }, [mapConstructor]);

  return (
    <section className="main-s">
      <div className="nav-search">
        <div className="container">
          <ul className="nav-search-body">
            <li className="nav-search_how select-choose">
              <label>Как</label>
              <span
                onClick={() => setShow1((prev) => !prev)}
                className="choose-btn choose-btn-round"
                href="#"
                id="choose-how"
                style={{
                  cursor: "pointer",
                }}
              >
                <span>Купить</span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </span>
              <div className={`nav-body-choose ${show1 ? "active" : ""}`}>
                <ul>
                  <li>
                    {" "}
                    <a className="btn btn-orange-light active" href="#">
                      Купить{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="btn btn-orange-light" href="#">
                      Продать{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-search_type select-choose">
              <label>Деятельности мастера</label>
              <a
                className="choose-btn choose-btn-link"
                id="choose-type"
                onClick={() => setShow2((prev) => !prev)}
                style={{
                  cursor: "pointer",
                }}
              >
                <span>Сантехник </span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </a>
              <div className={`nav-body-choose ${show2 ? "active" : ""}`}>
                <ul>
                  <li>
                    {" "}
                    <a className="btn btn-orange-light active" href="#">
                      Квартиру{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="btn btn-orange-light" href="#">
                      Дома{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="btn btn-orange-light" href="#">
                      Участка{" "}
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <a className="btn btn-orange-light" href="#">
                      Комната{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="btn btn-orange-light" href="#">
                      Дача{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-search_address">
              <label>Адрес</label>
              <YMaps
                    query={{
                      apikey: "29294198-6cdc-4996-a870-01e89b830f3e",
                      lang: "en_RU",
                    }}
                  >
                    <Map
                      // {...mapOptions}
                      // // state={state}s
                      // state={{
                      //   center: state?.center,
                      //   zoom: 12,
                      // }}
                      onLoad={setMapConstructor}
                      // onBoundsChange={handleBoundsChange}
                      // instanceRef={mapRef}
                    >
                      <div
                        style={{
                          width: "1rem",
                          height: "1rem",
                          background: "#000",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -100%)",
                          zIndex: 3000,
                        }}
                      ></div>
                    </Map>
                  </YMaps>
              <a href="#">
                <svg className="svg-sprite-icon icon-fi_navigation w-16">
                  <use href={`${spirite}#fi_navigation`}></use>
                </svg>
                <input ref={searchRef} type="text" placeholder="г.Ташкент, ул. Амир Темур 65 А дом" />
              </a>
            </li>
            <li>
              <button className="btn show-btn-orange btn-search">
                Показать
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="main"></div>
      </div>
      <section className="categories-s">
        <div className="container">
          <div className="categories">
            <ul id="categories-list"></ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FilterWorker;

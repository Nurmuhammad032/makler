import { useEffect, useState } from "react";
import spirite from "../../assets/img/symbol/sprite.svg";

const FilterIndustria = ({ change, value }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [profess, setProfess] = useState("");
  const [profess2, setProfess2] = useState("");
  const option1 = [
    {
      label: "For who",
      value: 1,
    },
    {
      label: "For who 2",
      value: 2,
    },
    {
      label: "For house",
      value: 3,
    },
  ];
  const option2 = [
    {
      label: "For who",
      value: 1,
    },
    {
      label: "For who 2",
      value: 2,
    },
    {
      label: "For house",
      value: 3,
    },
  ];
  const { useFor, how_store_service } = value;

  useEffect(() => {
    setProfess(option1[useFor - 1]?.label);
  }, [useFor]);
  useEffect(() => {
    setProfess2(option2[how_store_service - 1]?.label);
  }, [how_store_service]);
  return (
    <section className="main-s">
      <div className="nav-search">
        <div className="container">
          <ul className="nav-search-body">
            <li className="nav-search_how select-choose">
              <label className="nav-label">Как</label>
              <span
                onClick={() => setShow1((prev) => !prev)}
                className="choose-btn choose-btn-round"
                href="#"
                id="choose-how"
                style={{
                  cursor: "pointer",
                }}
              >
                <span>{profess2 ? profess2 : "---------"}</span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </span>
              <div className={`nav-body-choose ${show1 ? "active" : ""}`}>
                <ul>
                  {option2.map((item) => (
                    <li key={item.value}>
                      <label
                        htmlFor={`how_store_service${item.value}`}
                        className={`btn btn-orange-light ${
                          Number(how_store_service) === item.value
                            ? "active"
                            : ""
                        }`}
                      >
                        {item.label}
                        <input
                          type="text"
                          id={`how_store_service${item.value}`}
                          name="how_store_service"
                          value={item.value}
                          onClick={(e) => {
                            change(e);
                            setShow1(false);
                          }}
                          onChange={change}
                          style={{ display: "none" }}
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav-search_type select-choose">
              <label className="nav-label">Деятельности мастера</label>
              <a
                className="choose-btn choose-btn-link"
                id="choose-type"
                onClick={() => setShow2((prev) => !prev)}
                style={{
                  cursor: "pointer",
                }}
              >
                <span>{profess ? profess : "---------"}</span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </a>
              <div className={`nav-body-choose ${show2 ? "active" : ""}`}>
                <ul>
                  {option1.map((item) => (
                    <li key={item.value}>
                      <label
                        htmlFor={`useFor${item.value}`}
                        className={`btn btn-orange-light ${
                          Number(useFor) === item.value ? "active" : ""
                        }`}
                      >
                        {item.label}
                        <input
                          type="text"
                          id={`useFor${item.value}`}
                          name="useFor"
                          value={item.value}
                          onClick={(e) => {
                            change(e);
                            setShow2(false);
                          }}
                          onChange={change}
                          style={{ display: "none" }}
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav-search_address">
              <label className="nav-label">Адрес</label>
              <a href="#">
                <svg className="svg-sprite-icon icon-fi_navigation w-16">
                  <use href={`${spirite}#fi_navigation`}></use>
                </svg>
                <input
                  type="text"
                  name="search"
                  onChange={change}
                  className="search-input"
                  placeholder="г.Ташкент, ул. Амир Темур 65 А дом"
                />
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

export default FilterIndustria;
import { startTransition, useState } from "react";
import spirite from "../../assets/img/symbol/sprite.svg";

const Filter = ({ value, change, start, setFocus }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <section className="main-s">
      <div className="nav-search">
        <div className="container">
          <ul className="nav-search-body">
            <li className="nav-search_how select-choose">
              <label className="nav-label">Как</label>
              <a
                className="choose-btn choose-btn-round"
                id="choose-how"
                onClick={() => setShow1((prev) => !prev)}
                style={{
                  cursor: "pointer",
                }}
              >
                <span>{value.typeRoom}</span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </a>
              <div className={`nav-body-choose ${show1 ? "active" : ""}`}>
                <ul>
                  <li>
                    <label
                      htmlFor="roomtype"
                      className={`btn btn-orange-light ${
                        value.typeRoom === "rent" ? "active" : ""
                      }`}
                    >
                      rent
                      <input
                        type="text"
                        id="roomtype"
                        name="typeRoom"
                        value={"rent"}
                        onClick={(e) => {
                          change(e);
                          setShow1(false);
                        }}
                        onChange={change}
                        style={{ display: "none" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="roomtype2"
                      className={`btn btn-orange-light ${
                        value.typeRoom === "for_sale" ? "active" : ""
                      }`}
                    >
                      for_sale
                      <input
                        type="text"
                        id="roomtype2"
                        name="typeRoom"
                        value={"for_sale"}
                        onClick={(e) => {
                          change(e);
                          setShow1(false);
                        }}
                        onChange={change}
                        style={{ display: "none" }}
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-search_type select-choose">
              <label className="nav-label">Тип</label>
              <a
                className="choose-btn choose-btn-link"
                id="choose-type"
                onClick={() => setShow2((prev) => !prev)}
                style={{
                  cursor: "pointer",
                }}
              >
                <span>{value.building}</span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </a>
              <div className={`nav-body-choose ${show2 ? "active" : ""}`}>
                <ul>
                  <li>
                    <label
                      htmlFor="building1"
                      className={`btn btn-orange-light ${
                        value.building === "brick" ? "active" : ""
                      }`}
                    >
                      Brick
                      <input
                        type="text"
                        id="building1"
                        name="building"
                        value={"brick"}
                        onClick={(e) => {
                          change(e);
                          setShow2(false);
                        }}
                        onChange={change}
                        style={{ display: "none" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="building2"
                      className={`btn btn-orange-light ${
                        value.building === "monolith" ? "active" : ""
                      }`}
                    >
                      Monolith
                      <input
                        type="text"
                        id="building2"
                        name="building"
                        value={"monolith"}
                        onClick={(e) => {
                          change(e);
                          setShow2(false);
                        }}
                        onChange={change}
                        style={{ display: "none" }}
                      />
                    </label>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label
                      htmlFor="building3"
                      className={`btn btn-orange-light ${
                        value.building === "panel" ? "active" : ""
                      }`}
                    >
                      Panel
                      <input
                        type="text"
                        id="building3"
                        name="building"
                        value={"panel"}
                        onClick={(e) => {
                          change(e);
                          setShow2(false);
                        }}
                        onChange={change}
                        style={{ display: "none" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="building4"
                      className={`btn btn-orange-light ${
                        value.building === "blocky" ? "active" : ""
                      }`}
                    >
                      Blocky
                      <input
                        type="text"
                        id="building4"
                        name="building"
                        value={"blocky"}
                        onClick={(e) => {
                          change(e);
                          setShow2(false);
                        }}
                        onChange={change}
                        style={{ display: "none" }}
                      />
                    </label>
                  </li>
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
                  placeholder="г.Ташкент, ул. Амир Темур 65 А дом"
                  className="search-input"
                />
              </a>
            </li>
            <li className="nav-search_rooms">
              <label className="nav-label">Кол-во комнат</label>
              <ul className="rooms-list" id="choose-room">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li>
                    <label
                      htmlFor={`room${item}`}
                      className={`btn btn-orange-light ${
                        value.room === item.toString() ? "active" : ""
                      }`}
                    >
                      {item}
                      <input
                        type="text"
                        id={`room${item}`}
                        name="room"
                        value={item}
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
            </li>
            <li>
              <button
                className="btn show-btn-orange btn-search"
                onClick={() => start(2)}
              >
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

export default Filter;

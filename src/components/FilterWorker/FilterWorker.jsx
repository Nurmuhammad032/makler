import spirite from "../../assets/img/symbol/sprite.svg";

const FilterWorker = () => {
  return (
    <section className="main-s">
      <div className="nav-search">
        <div className="container">
          <ul className="nav-search-body">
            <li className="nav-search_how select-choose">
              <label>Как</label>
              <a
                className="choose-btn choose-btn-round"
                href="#"
                id="choose-how"
              >
                <span>Купить</span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </a>
              <div className="nav-body-choose">
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
                href="#"
                id="choose-type"
              >
                <span>Сантехник </span>
                <svg className="svg-sprite-icon icon-fi_chevron-down w-12">
                  <use href={`${spirite}#fi_chevron-down`}></use>
                </svg>
              </a>
              <div className="nav-body-choose">
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
              <a href="#">
                <svg className="svg-sprite-icon icon-fi_navigation w-16">
                  <use href={`${spirite}#fi_navigation`}></use>
                </svg>
                <span>г.Ташкент, ул. Амир Темур 65 А дом </span>
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
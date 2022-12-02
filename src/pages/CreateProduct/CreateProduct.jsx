import "./CreateProduct.scss";
import sprite from "../../assets/img/symbol/sprite.svg";
import { useContext, useEffect, useState } from "react";
import { LoginModal } from "../../components";
import ContextApp from "../../context/context";
import { useRef } from "react";
import {
  GeolocationControl,
  Map,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import useForm from "../../hooks/useForm";
import useNav from "../../hooks/useNav";
import axios from "axios";
import { baseURL } from "../../requests/requests";

const CreateProduct = () => {
  const [navActive, setNavActive] = useState(false);
  const { loginModalFunc, openLoginModal } = useContext(ContextApp);
  const initialState = {
    title: "",
    center: [40.783388, 72.350663],
    zoom: 12,
  };

  const texte = (e) => {};

  const [state, setState] = useState({ ...initialState });
  const [mapConstructor, setMapConstructor] = useState(null);
  const mapRef = useRef(null);
  const searchRef = useRef(null);
  const [points, setPoints] = useState([]);
  const { form, changeHandler } = useForm({
    title: "",
    descriptions: "",
    price: "",
    price_type: "y.e",
    type: "",
    rental_type: "",
    property_type: "residential",
    object: "flat",
    web_address_title: "",
    web_address_latitude: "",
    web_address_longtitude: "",
    // uploaded_images: "",
    pm_general: "",
    pm_residential: "",
    pm_kitchen: "",
    number_of_rooms: "",
    floor: "",
    floor_from: "",
    building_type: "",
    app_ipoteka: "",
    app_mebel: "",
    app_new_building: "",
    amenities: [3],
    phone_number: "+99895",
    isBookmarked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: form.title,
      descriptions: form.descriptions,
      price: form.price,
      price_type: Number(form.price_type),
      type: form.type,
      rental_type: form.rental_type,
      property_type: form.property_type,
      object: form.object,
      web_address_title: searchRef.current?.value,
      web_address_latitude: initialState.center[0],
      // web_address_longtitude: initialState.center[1],
      // uploaded_images: form.uploaded_images,
      pm_general: form.pm_general,
      pm_residential: form.pm_residential,
      pm_kitchen: form.pm_kitchen,
      number_of_rooms: form.number_of_rooms,
      floor: form.floor,
      floor_from: form.floor_from,
      building_type: form.building_type,
      app_ipoteka: Boolean(form.app_ipoteka),
      app_mebel: Boolean(form.app_mebel),
      app_new_building: Boolean(form.app_new_building),
      amenities: form.amenities,
      phone_number: form.phone_number,
      isBookmarked: form.isBookmarked,
    };
    const d = {
      title: "string",
      descriptions: "string",
      price: "string",
      price_type: 1,
      type: "rent",
      rental_type: "long_time",
      property_type: "residential",
      object: "flat",
      web_address_title: "string",
      web_address_latitude: 0,
      pm_general: "8",
      pm_residential: "string",
      pm_kitchen: "string",
      number_of_rooms: "string",
      floor: "string",
      floor_from: "string",
      building_type: "brick",
      app_ipoteka: true,
      app_mebel: true,
      app_new_building: true,
      amenities: [3],
      phone_number: "string",
      isBookmarked: true,
    };

    console.log(data, d);

    axios
      .post(`https://fathulla.tk/products/web/api/v1/web-houses/create/`, data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  // /products/web/api/v1/web-houses/create/
  // console.log(data);

  const mapOptions = {
    modules: ["geocode", "SuggestView"],
    defaultOptions: { suppressMapOpenBlock: true },
    width: 600,
    height: 400,
  };

  // const testc = (e) => {
  //   console.log(e.target.value);
  //   console.log(typeof e.target.value);
  // };

  const geolocationOptions = {
    defaultOptions: { maxWidth: 128 },
    defaultData: { content: "Determine" },
  };

  // const renderMap = () => {
  //   axios
  //     .get(
  //       `https://geocode-maps.yandex.ru/1.x/?apikey=c5bd98ea-afd9-433c-909d-a54b6459fb30&format=json&geocode=${address}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       let point =
  //         res.data.response.GeoObjectCollection.featureMember[0].GeoObject
  //           .Point;

  //       setPoints([
  //         [Number(point.pos.split(" ")[1]), Number(point.pos.split(" ")[0])],
  //       ]);
  //     });
  // };

  // const handleReset = () => {
  //   setState({ ...initialState });
  //   searchRef.current.value = "";
  //   mapRef.current.setCenter(initialState.center);
  //   mapRef.current.setZoom(initialState.zoom);
  // };

  // search popup
  useEffect(() => {
    if (mapConstructor) {
      new mapConstructor.SuggestView(searchRef.current).events.add(
        "select",
        function (e) {
          const selectedName = e.get("item")?.value;
          mapConstructor?.geocode(selectedName).then((result) => {
            const newCoords = result?.geoObjects
              ?.get(0)
              ?.geometry?.getCoordinates();
            console.log(newCoords);
            setState((prevState) => ({ ...prevState, center: newCoords }));
          });
        }
      );
    }
  }, [mapConstructor]);

  // change title
  const handleBoundsChange = (e) => {
    const newCoords = mapRef.current.getCenter();
    mapConstructor?.geocode(newCoords).then((res) => {
      const nearest = res?.geoObjects?.get(0);
      const foundAddress = nearest?.properties.get("text");
      const [centerX, centerY] = nearest?.geometry.getCoordinates();
      const [initialCenterX, initialCenterY] = initialState?.center;
      if (centerX !== initialCenterX && centerY !== initialCenterY) {
        setState((prevState) => ({ ...prevState, title: foundAddress }));
      }
    });
  };

  return (
    <>
      <section className="create-product-s">
        <div className="container">
          <div className="create-product">
            <form
              className="create-product__left"
              id="create-product"
              onSubmit={handleSubmit}
            >
              <h2>
                Добавить новое <br />
                объявление
              </h2>
              <p className="subtitle">
                Объявление будет доступно на <a href="makler.uz">Makler.uz</a> и
                в наших <br />
                мобильных приложениях
              </p>
              <h5>Заголовка объявления</h5>
              <div className="form-input">
                <input
                  placeholder="пусто"
                  id="title-product"
                  type="text"
                  name="title"
                  onChange={changeHandler}
                  required
                />
              </div>
              <h5>Краткое описание </h5>
              <div className="form-textarea">
                <textarea
                  placeholder="пусто"
                  id="description-product"
                  type="text"
                  name="descriptions"
                  onChange={changeHandler}
                  required
                ></textarea>
              </div>
              <h5>Цена</h5>
              <div className="form-price">
                <input
                  type="number"
                  placeholder="Стоимость"
                  required
                  name="price"
                  onChange={changeHandler}
                />
                <div className="form-price-choose">
                  <button
                    className="choose-currency"
                    type="button"
                    id="select-currency"
                    onClick={() => setNavActive((prev) => !prev)}
                  >
                    <span>{form.price_type}</span>
                    <svg className="svg-sprite-icon icon-fi_chevron-down fill-n w-12">
                      <use href={`${sprite}#fi_chevron-down`}></use>
                    </svg>
                  </button>
                  <div className={`nav-body-choose ${navActive && "active"}`}>
                    <ul>
                      {[1, 2].map((item) => (
                        <input
                          key={item}
                          type="text"
                          name="price_type"
                          className={`app__nav-input ${
                            form.price_type === item && "active"
                          }`}
                          onClick={(e) => {
                            changeHandler(e);
                            setNavActive(false);
                          }}
                          value={item}
                          readOnly
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <h5>Выберите тип объявления</h5>
              <div className="create-product-btns mb-30">
                <div className="radio-btn-big">
                  <input
                    type="radio"
                    name="type"
                    id="rent"
                    checked={form.type === "rent"}
                    value="rent"
                    onChange={changeHandler}
                  />
                  <label htmlFor="rent">Сдать в аренду</label>
                </div>
                <div className="radio-btn-big">
                  <input
                    type="radio"
                    name="type"
                    id="sale"
                    checked={form.type === "for_sale"}
                    value="for_sale"
                    onChange={changeHandler}
                  />
                  <label htmlFor="sale">Продажа недвижимости</label>
                </div>
              </div>
              <h5>Тип аренды</h5>
              <ul className="switch-list mb-40">
                <li className="switch-btn">
                  <input
                    type="radio"
                    id="long"
                    name="rental_type"
                    onChange={changeHandler}
                    // defaultChecked
                    value="long_time"
                  />
                  <label htmlFor="long">Длительно</label>
                </li>
                <li className="switch-btn">
                  <input
                    type="radio"
                    onChange={changeHandler}
                    id="month"
                    name="rental_type"
                    value="several_months"
                  />
                  <label htmlFor="month">На несколько месяцев</label>
                </li>
                <li className="switch-btn">
                  <input
                    type="radio"
                    onChange={changeHandler}
                    id="day"
                    name="rental_type"
                    value="daily"
                  />
                  <label htmlFor="day">Посуточно</label>
                </li>
              </ul>
              <h5>Тип недвижимости</h5>
              <ul className="radio-list mb-60">
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="living"
                    value={"residential"}
                    checked={form.property_type === "residential"}
                    onChange={changeHandler}
                    name="property_type"
                  />
                  <label htmlFor="living">Жилая </label>
                </li>
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="commercial"
                    value={"commercial"}
                    checked={form.property_type === "commercial"}
                    onChange={changeHandler}
                    name="property_type"
                  />
                  <label htmlFor="commercial">Коммерческая </label>
                </li>
              </ul>
              <h5>Объект</h5>
              <ul className="radio-list mb-50">
                {[
                  {
                    text: "Квартира",
                    value: "flat",
                  },
                  {
                    text: "Комната",
                    value: "room",
                  },
                  {
                    text: "Дача",
                    value: "summer_cottage",
                  },
                  {
                    text: "Дом",
                    value: "house",
                  },
                  {
                    text: "Часть дома",
                    value: "part_house",
                  },
                  {
                    text: "Таунхаус",
                    value: "townhouse",
                  },
                  {
                    text: "Койко-место",
                    value: "bed_space",
                  },
                ].map(({ text, value }) => (
                  <li className="radio-btn" key={value}>
                    <input
                      type="radio"
                      id={text}
                      name="object"
                      onChange={changeHandler}
                      value={value}
                      checked={form.object === value}
                    />
                    <label htmlFor={text}>{text}</label>
                  </li>
                ))}
                {/* 
                <li className="radio-btn">
                  <input type="radio" id="room" name="object" value="room" />
                  <label htmlFor="room">Комната</label>
                </li>
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="dacha"
                    name="object"
                    value="summer_cottage"
                  />
                  <label htmlFor="dacha">Дача</label>
                </li>
                <li className="radio-btn">
                  <input type="radio" id="house" name="object" value="house" />
                  <label htmlFor="house">Дом</label>
                </li>
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="part"
                    name="object"
                    value="part_house"
                  />
                  <label htmlFor="part">Часть дома</label>
                </li>
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="townhouse"
                    name="object"
                    value="townhouse"
                  />
                  <label htmlFor="townhouse">Таунхаус</label>
                </li>
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="some"
                    name="object"
                    value="bed_space"
                  />
                  <label htmlFor="some">Койко-место</label>
                </li> */}
              </ul>
              <h5>Расположение</h5>
              <div className="map mb-50">
                <div className="map-info">
                  <h5>Где находится?</h5>
                  <div className="map-address">
                    <input
                      ref={searchRef}
                      placeholder="г.Ташкент, ул.Охангарон 65 А 1"
                      id="suggest"
                      name="web_address_title"
                      // onChange={changeHandler}
                      // value={form.web_address_title}
                    />
                    {/* <button className="btn btn-black" id="save-address">
                      Сохранить
                    </button> */}
                  </div>
                </div>
                <p className="error-par d-none">
                  Такой геолокации не существует
                </p>
                <div
                  id="map"
                  className="mapRoot"
                  style={{
                    position: "relative",
                  }}
                >
                  <YMaps
                    query={{
                      apikey: "29294198-6cdc-4996-a870-01e89b830f3e",
                      lang: "en_RU",
                    }}
                  >
                    <Map
                      {...mapOptions}
                      // state={state}s
                      state={{
                        center: state?.center,
                        zoom: 12,
                      }}
                      onLoad={setMapConstructor}
                      onBoundsChange={handleBoundsChange}
                      instanceRef={mapRef}
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
                      <GeolocationControl {...geolocationOptions} />
                      <ZoomControl />
                    </Map>
                  </YMaps>
                </div>
              </div>
              <h5>Изображения объекта</h5>
              {/* <div className="image-upload mb-50">
                <div className="image-outer">
                  <div className="image-outer-info">
                    <h5>Перетащите сюда свои изображения или нажмите сюда</h5>
                    <p>Поддерживает: .jpg, .png, .jpeg</p>
                  </div>
                  <input
                    type="file"
                    name="uploaded_images"
                    // onChange={changeHandler}
                        onChange={texte}
                    id="upload-images"
                    accept="image/png, image/jpeg, image/jpg"
                    multiple
                  />
                  <label htmlFor="upload-images">открыть</label>
                </div>
                <ul className="image-list" id="gallery"></ul>
              </div> */}
              <h5>Вся информация об объекте</h5>
              <div className="sizes mb-50">
                <p>Площадь, м² *</p>
                <div className="sizes-inputs">
                  <input
                    placeholder="Общая"
                    type="number"
                    id="general"
                    name="pm_general"
                    onChange={changeHandler}
                    required
                  />
                  <input
                    placeholder="Жилая"
                    name="pm_residential"
                    onChange={changeHandler}
                    type="number"
                    required
                  />
                  <input
                    placeholder="Кухня"
                    name="pm_kitchen"
                    onChange={changeHandler}
                    type="number"
                    required
                  />
                </div>
                <div className="sizes-input">
                  <label>Количество комнат *</label>
                  <input
                    placeholder="Общая"
                    name="number_of_rooms"
                    type="number"
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="sizes-input">
                  <label>Этаж*</label>
                  <input
                    placeholder="Общая"
                    name="floor"
                    type="number"
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="sizes-input">
                  <label>Этаж из*</label>
                  <input
                    placeholder="Общая"
                    name="floor_from"
                    onChange={changeHandler}
                    type="number"
                    required
                  />
                </div>
              </div>
              <h5>Тип строения</h5>
              <ul className="radio-list mb-50">
                {["brick", "monolith", "panel", "blocky"].map((item) => (
                  <li className="radio-btn" key={item}>
                    <input
                      type="radio"
                      id={item}
                      name="building_type"
                      value={item}
                      onChange={changeHandler}
                      checked={form.building_type === item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </li>
                ))}
                {/*      <li className="radio-btn">
                  <input type="radio" id="type-monolith" name="type-building" />
                  <label htmlFor="type-monolith">Монолит</label>
                </li>
FV                  <input type="radio" id="type-panel" name="type-building" />
                  <label htmlFor="type-panel">Панель</label>
                </li>
                <li className="radio-btn">
                  <input type="radio" id="type-block" name="type-building" />
                  <label htmlFor="type-block">Блочный</label>
                </li> */}
              </ul>
              <ul className="ipoteka-list mb-40">
                <li className="radio-list">
                  <h5>Ипотека</h5>
                  <div className="radios">
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="ipoteka-yes"
                        value={"true"}
                        onChange={changeHandler}
                        name="app_ipoteka"
                      />
                      <label htmlFor="ipoteka-yes">да</label>
                    </div>
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="ipoteka-no"
                        value={""}
                        name="app_ipoteka"
                        onChange={changeHandler}
                      />
                      <label htmlFor="ipoteka-no">нет </label>
                    </div>
                  </div>
                </li>
                <li className="radio-list">
                  <h5>Новостройка</h5>
                  <div className="radios">
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="new-buildings-yes"
                        name="app_new_building"
                        onChange={changeHandler}
                        value={"true"}
                      />
                      <label htmlFor="new-buildings-yes">да</label>
                    </div>
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="new-buildings-no"
                        name="app_new_building"
                        onChange={changeHandler}
                        value={""}
                      />
                      <label htmlFor="new-buildings-no">нет </label>
                    </div>
                  </div>
                </li>
                <li className="radio-list">
                  <h5>Меблирована</h5>
                  <div className="radios">
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="furnishings-yes"
                        name="app_mebel"
                        onChange={changeHandler}
                        value={"true"}
                      />
                      <label htmlFor="furnishings-yes">да</label>
                    </div>
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="furnishings-no"
                        onChange={changeHandler}
                        value={""}
                        name="app_mebel"
                      />
                      <label htmlFor="furnishings-no">нет </label>
                    </div>
                  </div>
                </li>
              </ul>
              <h5>Все удобства</h5>
              <ul className="checkbox-list mb-40" id="amenities-list"></ul>
              <div className="confirm-checkbox">
                <input type="checkbox" id="confirm-data" />
                <label htmlFor="confirm-data">
                  <p>
                    Я прочитал и согласен с условиями использования <br />и
                    публикации!
                  </p>
                  <svg className="svg-sprite-icon icon-check w-12">
                    <use href={`${sprite}#check`}></use>
                  </svg>
                </label>
              </div>
              <div className="btns">
                <button
                  className="btn btn-black"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Сохранить как черновик
                </button>
                {/* <button className="btn btn-orange">
                  Опубликовать объявление{" "}
                </button> */}
              </div>
            </form>
            <div className="create-product__right">
              <h5>Контактная информация</h5>
              <div className="form">
                <h3>Вы зарегистрированы?</h3>
                <p>
                  Если вы уже зарегистрированы, нажмите на кнопку{" "}
                  <span
                    onClick={() => loginModalFunc(true)}
                    id="login-modal"
                    style={{
                      fontWeight: "bold",
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Войти
                  </span>
                  .{" "}
                </p>
                <form>
                  <div className="form-input">
                    <label>Имя Фамилия*</label>
                    <input type="text" placeholder="ФИО" />
                  </div>
                  <div className="form-input">
                    <label>Номер телефона*</label>
                    <input type="text" defaultValue="+998" />
                  </div>
                  <div className="form-input">
                    <label>Дополнительный номер телефона!*</label>
                    <input type="text" defaultValue="+998" />
                  </div>
                  <p>Telegram</p>
                  <button className="btn btn-telegram">
                    <svg className="svg-sprite-icon icon-telegram w-14">
                      <use href={`${sprite}#telegram`}></use>
                    </svg>
                    <span>t.me://channel_username</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {openLoginModal && <LoginModal />}
    </>
  );
};

export default CreateProduct;

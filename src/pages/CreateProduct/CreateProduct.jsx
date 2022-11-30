import "./CreateProduct.scss";
import sprite from "../../assets/img/symbol/sprite.svg";
import { useContext, useEffect, useState } from "react";
import { LoginModal } from "../../components";
import ContextApp from "../../context/context";
import { useRef } from "react";
import { GeolocationControl, Map, YMaps, ZoomControl } from "react-yandex-maps";
import useForm from "../../hooks/useForm";

const CreateProduct = () => {
  const { form, changeHandler } = useForm({});
  const initialState = {
    title: "",
    center: [40.783388, 72.350663],
    zoom: 12,
  };

  const mapOptions = {
    modules: ["geocode", "SuggestView"],
    defaultOptions: { suppressMapOpenBlock: true },
    width: 600,
    height: 400,
  };

  const geolocationOptions = {
    defaultOptions: { maxWidth: 128 },
    defaultData: { content: "Determine" },
  };

  const { loginModalFunc, openLoginModal } = useContext(ContextApp);
  const [state, setState] = useState({ ...initialState });
  const [mapConstructor, setMapConstructor] = useState(null);
  const mapRef = useRef(null);
  const searchRef = useRef(null);
  const [points, setPoints] = useState([]);
  let address = [41.311151, 69.279737];

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

  const handleReset = () => {
    setState({ ...initialState });
    searchRef.current.value = "";
    mapRef.current.setCenter(initialState.center);
    mapRef.current.setZoom(initialState.zoom);
  };

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
            <form className="create-product__left" id="create-product">
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
                  required
                />
              </div>
              <h5>Краткое описание </h5>
              <div className="form-textarea">
                <textarea
                  placeholder="пусто"
                  id="description-product"
                  type="text"
                  required
                ></textarea>
              </div>
              <h5>Цена</h5>
              <div className="form-price">
                <input
                  type="number"
                  placeholder="Стоимость"
                  required
                  name="product-price"
                />
                <div className="form-price-choose">
                  <button
                    className="choose-currency"
                    type="button"
                    id="select-currency"
                  >
                    <span>у.е</span>
                    <svg className="svg-sprite-icon icon-fi_chevron-down fill-n w-12">
                      <use href={`${sprite}#fi_chevron-down`}></use>
                    </svg>
                  </button>
                  <div className="nav-body-choose">
                    <ul>
                      <li>
                        {" "}
                        <a className="btn btn-orange-light active" href="#">
                          y.e
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="btn btn-orange-light" href="#">
                          som
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h5>Выберите тип объявления</h5>
              <div className="create-product-btns mb-30">
                <div className="radio-btn-big">
                  <input
                    type="radio"
                    name="type-product"
                    id="rent"
                    defaultChecked
                    value="rent"
                  />
                  <label htmlFor="rent">Сдать в аренду</label>
                </div>
                <div className="radio-btn-big">
                  <input
                    type="radio"
                    name="type-product"
                    id="sale"
                    value="for_sale"
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
                    name="time"
                    defaultChecked
                    value="long_time"
                  />
                  <label htmlFor="long">Длительно</label>
                </li>
                <li className="switch-btn">
                  <input
                    type="radio"
                    id="month"
                    name="time"
                    value="several_months"
                  />
                  <label htmlFor="month">На несколько месяцев</label>
                </li>
                <li className="switch-btn">
                  <input type="radio" id="day" name="time" value="daily" />
                  <label htmlFor="day">Посуточно</label>
                </li>
              </ul>
              <h5>Тип недвижимости</h5>
              <ul className="radio-list mb-60">
                <li className="radio-btn">
                  <input type="radio" id="living" name="type" defaultChecked />
                  <label htmlFor="living">Жилая </label>
                </li>
                <li className="radio-btn">
                  <input type="radio" id="commercial" name="type" />
                  <label htmlFor="commercial">Коммерческая </label>
                </li>
              </ul>
              <h5>Объект</h5>
              <ul className="radio-list mb-50">
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="flat"
                    name="object"
                    defaultChecked
                    value="flat"
                  />
                  <label htmlFor="flat">Квартира</label>
                </li>
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
                </li>
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
              <div className="image-upload mb-50">
                <div className="image-outer">
                  <div className="image-outer-info">
                    <h5>Перетащите сюда свои изображения или нажмите сюда</h5>
                    <p>Поддерживает: .jpg, .png, .jpeg</p>
                  </div>
                  <input
                    type="file"
                    name="files"
                    id="upload-images"
                    accept="image/png, image/jpeg, image/jpg"
                    multiple
                  />
                  <label htmlFor="upload-images">открыть</label>
                </div>
                <ul className="image-list" id="gallery"></ul>
              </div>
              <h5>Вся информация об объекте</h5>
              <div className="sizes mb-50">
                <p>Площадь, м² *</p>
                <div className="sizes-inputs">
                  <input
                    placeholder="Общая"
                    type="number"
                    id="general"
                    required
                  />
                  <input placeholder="Жилая" type="number" required />
                  <input placeholder="Кухня" type="number" required />
                </div>
                <div className="sizes-input">
                  <label>Количество комнат *</label>
                  <input
                    placeholder="Общая"
                    name="number_of_rooms"
                    type="number"
                    required
                  />
                </div>
                <div className="sizes-input">
                  <label>Этаж*</label>
                  <input
                    placeholder="Общая"
                    name="floor"
                    type="number"
                    required
                  />
                </div>
                <div className="sizes-input">
                  <label>Этаж из*</label>
                  <input
                    placeholder="Общая"
                    name="floor_of"
                    type="number"
                    required
                  />
                </div>
              </div>
              <h5>Тип строения</h5>
              <ul className="radio-list mb-50">
                <li className="radio-btn">
                  <input
                    type="radio"
                    id="type-brick"
                    name="type-building"
                    defaultChecked
                  />
                  <label htmlFor="type-brick">Кирпич</label>
                </li>
                <li className="radio-btn">
                  <input type="radio" id="type-monolith" name="type-building" />
                  <label htmlFor="type-monolith">Монолит</label>
                </li>
                <li className="radio-btn">
                  <input type="radio" id="type-panel" name="type-building" />
                  <label htmlFor="type-panel">Панель</label>
                </li>
                <li className="radio-btn">
                  <input type="radio" id="type-block" name="type-building" />
                  <label htmlFor="type-block">Блочный</label>
                </li>
              </ul>
              <ul className="ipoteka-list mb-40">
                <li className="radio-list">
                  <h5>Ипотека</h5>
                  <div className="radios">
                    <div className="radio-btn">
                      <input type="radio" id="ipoteka-yes" name="ipoteka" />
                      <label htmlFor="ipoteka-yes">да</label>
                    </div>
                    <div className="radio-btn">
                      <input type="radio" id="ipoteka-no" name="ipoteka" />
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
                        name="new-buildings"
                      />
                      <label htmlFor="new-buildings-yes">да</label>
                    </div>
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="new-buildings-no"
                        name="new-buildings"
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
                        name="furnishings"
                      />
                      <label htmlFor="furnishings-yes">да</label>
                    </div>
                    <div className="radio-btn">
                      <input
                        type="radio"
                        id="furnishings-no"
                        name="furnishings"
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
              {/* <div className="btns">
                <button className="btn btn-black">
                  Сохранить как черновик
                </button>
                <button className="btn btn-orange">
                  Опубликовать объявление{" "}
                </button>
              </div> */}
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

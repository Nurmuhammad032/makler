import React, { useEffect, useRef, useState } from "react";
import avatar_image from "../.././assets/img/avatar_change.png";
import "./EditPage.css";
import sprite from "../../assets/img/symbol/sprite.svg";
import {
  GeolocationControl,
  Map,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  Chip,
  useTheme,
  InputLabel,
  FormControl,
} from "@mui/material";
import useForm from "../../hooks/useForm";
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  {
    text: "architect",
    value: 1,
  },
  {
    text: "painter",
    value: 2,
  },
  {
    text: "electrician",
    value: 3,
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function EditPage() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(value);
  };
  const initialState = {
    title: "",
    center: [40.783388, 72.350663],
    zoom: 12,
  };
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [state, setState] = useState({ ...initialState });
  const [mapConstructor, setMapConstructor] = useState(null);
  const mapRef = useRef(null);
  const searchRef = useRef(null);

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

  const { form, changeHandler } = useForm({
    name: "",
    email: "",
    // image:
    //   "https://fathulla.tk/media/master_image/UIC_Group_-_Google_Chrome_25.11.2022_11_12_00.png",
    phone: 998,
    address_title: searchRef.current?.value,
    address_latitude: state.center[0],
    address_longitude: state.center[1],
    // avatar:
    //   "https://fathulla.tk/media/master_avatar/UIC_Group_-_Google_Chrome_25.11.2022_11_10_33.png",
    profession: [],
    descriptions: "",
    experience: 0,
  });

  const handeSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: form.name,
      email: form.email,
      //   image:
      // "https://fathulla.tk/media/master_image/UIC_Group_-_Google_Chrome_25.11.2022_11_12_00.png",
      phone: Number(form.phone),
      address_title: form.address_title,
      address_latitude: form.address_latitude,
      address_longitude: form.address_longitude,
      //   avatar:
      // "https://fathulla.tk/media/master_avatar/UIC_Group_-_Google_Chrome_25.11.2022_11_10_33.png",
      profession: form.profession,
      descriptions: form.descriptions,
      experience: form.experience,
    };

    axios
      .post("https://fathulla.tk/master/api/v1/maklers/create/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  console.log(form);

  return (
    <div className="container">
      <div className="create-product-s">
        <div className="create-product">
          <form className="create-product__left" onSubmit={handeSubmit}>
            <h1 className="edit__card__title">
              Регистрируйтес как мастер, получите работы
            </h1>
            <p className="edit__card__text">
              Объявление будет доступно на{" "}
              <a target={"_blank"} className="text__link" href="">
                Makler.uz
              </a>{" "}
              и в наших мобильных приложениях
            </p>
            <div className="card__header">
              <img
                className="avatar__img"
                src={avatar_image}
                alt="avatar image"
              />
              <div className="image__card">
                <p className="avatar__name">
                  Загрузите фото профиля или логотп компании
                </p>
                <button className="change__btn">Изменить фото профиля</button>
              </div>
            </div>
            <div className="editpage__input">
              <div className="form__input">
                <label htmlFor="">
                  <span>Имя Фамилия</span>
                  <input
                    name={"name"}
                    id="name"
                    onChange={changeHandler}
                    type={"text"}
                    placeholder="Abbos Janizakov"
                  />
                </label>
                <label id="email" htmlFor="">
                  <span>Электронная почта</span>
                  <input
                    name={"email"}
                    type={"email"}
                    onChange={changeHandler}
                    placeholder="info@gmail.com"
                  />
                </label>
                <label htmlFor="">
                  <span>Номер телефона | Ваше логин</span>
                  <input
                    name={"phone"}
                    type={"number"}
                    onChange={changeHandler}
                    placeholder="90 123-45-67"
                  />
                </label>
                <label htmlFor="">
                  <span>Пароль</span>
                  <input
                    name={"password"}
                    type="password"
                    onChange={changeHandler}
                    placeholder="пусто"
                  />
                </label>
                <label htmlFor="e">
                  <span
                    className="text__area"
                    style={{
                      display: 'block'
                    }}
                  >
                    Краткое описание о себе
                  </span>
                  <input type="text" id="e" placeholder="experience" />
                </label>
                <label htmlFor="">
                  <span className="text__area">Краткое описание о себе</span>
                  <textarea
                    className="textarea"
                    id=""
                    name="descriptions"
                    onChange={changeHandler}
                    placeholder="пусто"
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="second-card">
              <div className="second__card">
                <h2 className="second__card__title">
                  Выберите раздел и специализацию *
                </h2>
                <p className="second__card__text">Введите род деятельности!</p>
              </div>
              {/* <select
                  className="select"
                  name="ergerg"
                  id=""
                  placeholder="Сантехник"
                >
                  <option className="select__option" value="service">
                    Сантехник
                  </option>
                  <option className="select__option" value="service">
                    Мебельщик
                  </option>
                  <option className="select__option" value="service">
                    Уборшик
                  </option>
                  <option className="select__option" value="service">
                    Электрик
                  </option>
                  <option className="select__option" value="service">
                    Мастер окон
                  </option>
                </select> */}
              <FormControl sx={{ m: 0, width: "100%", bgcolor: "white" }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={(e) => {
                    handleChange();
                    changeHandler(e);
                  }}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          sx={{ bgcolor: "rgba(197, 102, 34, 0.1)" }}
                          key={value}
                          label={value}
                        />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name.value}
                      value={name.value}
                      style={getStyles(name.value, personName, theme)}
                    >
                      {name.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            {/* <div className="map--box">
                <form action="">
                  <label className="map__address" htmlFor="">
                    Укажите зону обслуживания!
                  </label>
                  <input className="map__input" type="text" />
                  <button className="map__btn">Сохранить</button>
                </form>
                <iframe
                  className="map__google"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.508298798211!2d74.5708881!3d42.8674796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1669904023735!5m2!1sru!2s"
                  width="440"
                  height="260"
                  frameBorder={"none"}
                ></iframe>
              </div> */}
            <h5>Расположение</h5>
            <div
              className="map"
              style={{
                position: "relative",
              }}
            >
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
                </div>
              </div>
              <p className="error-par d-none">Такой геолокации не существует</p>
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

            <div className="checkbox">
              <input
                className="checkbox__input"
                type={"checkbox"}
                name=""
                id=""
              />
              <span className="checkbox__text">
                Я прочитал и согласен с условиями использования и публикации!
              </span>
            </div>

            <div className="register">
              <div>
                <button
                  type="submit"
                  onSubmit={handeSubmit}
                  className="register__btn"
                >
                  Зарегистрироватся
                </button>
              </div>
            </div>
          </form>
          <div className="create-product__right">
            <div className="edit__card">
              <div className="edit__card__content">
                <h2 className="right__card__title">
                  Краткое описание о нашем сервисе
                </h2>
                <p className="edit__card__text">Регистрация как мастер</p>
                <p>
                  Как только вы зарегистрируетесь в качестве мастера, вы сможете
                  получать заказы по направлениям, введенным через наш портал!
                </p>
                <div className="blockquote__card">
                  <em className="blockquote__text">
                    Напоминаем, что мы не несем ответственности за сбор платы за
                    услуги через этот портал!
                  </em>
                </div>
                <p>
                  При регистрации вы вводите свой номер телефона в качестве
                  логина и придумываете себе пароль. Нажав кнопку входа, вы
                  введете свой номер телефона и пароль для доступа к
                  существующему профилю.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

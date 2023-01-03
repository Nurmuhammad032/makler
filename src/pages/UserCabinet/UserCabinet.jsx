import "./UserCabinet.scss";
import avatar from "../../assets/img/avatar-big.png";
import { LoadingPost, UserContents } from "../../components";
import avatar_image from "../../assets/img/avatar_change.png";
import spirite from "../../assets/img/symbol/sprite.svg";
import {
  announceData,
  archive,
  draft,
  userCabinetNavigator,
} from "./userAnnounce";
import { useContext, useEffect, useState } from "react";
import UserSettings from "./UserSettings";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../requests/requests";
import ContextApp from "../../context/context";
import { useStepContext } from "@mui/material";
import Loading from "../../components/Loading/Loading";

const UserCabinet = () => {
  const [holdId, setHoldId] = useState(1);
  const router = useNavigate();
  const { getUserData, userData } = useContext(ContextApp);
  const [stores, setStores] = useState(null);
  const [houses, setHouses] = useState(null);
  const [maklers, setMaklers] = useState([]);
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(true);
  const [draft, setDraft] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  // https://fathulla.tk/users/api/v1/user-products/2/
  useEffect(() => {
    let userToken = localStorage.getItem("access");
    axios
      .get(`${baseURL}/users/api/v1/user-products/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((data) => getUserData(data.data))
      .catch(() => navigate("/"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setStores(userData?.stores);
    setHouses(userData?.houses);
    setMaklers(userData?.maklers);
  }, [userData]);

  useEffect(() => {
    const filteredHouses = houses?.filter((item) => {
      return item.product_status !== 3 && item.draft !== true;
    });
    setFiltered(filteredHouses);
  }, [houses]);
  const handleLogOut = () => {
    localStorage.clear();
    router("/");
    window.location.reload();
  };

  return (
    <section className="cabinet-s">
      <div className="container">
        <div className="cabinet" id="cabinet">
          <section
            className={`advert-s ${holdId !== 1 && "d-none"}`}
            id="product"
          >
            <div className="container-sm">
              <div className="advert">
                <div className="alert-advert">
                  <h5>Продвигайте свое объявление в ТОП!</h5>
                  <p>
                    Как только вы зарегистрируетесь в качестве мастера, вы
                    сможете получать заказы по направлениям, введенным через наш
                    портал!
                  </p>
                  <div className="alert-advert-btns">
                    <button className="btn btn-orange-50">
                      Активировать в топ
                    </button>
                    <a>Подробнее </a>
                  </div>
                </div>
                {!loading ? (
                  <ul className="advert-list">
                    {stores &&
                      stores
                        ?.filter((item) => item.product_status !== 3)
                        ?.map((item) => (
                          <UserContents
                            key={item.id}
                            content="store"
                            data={item}
                          />
                        ))}
                    {filtered?.map((item, i) => (
                      <UserContents key={i} data={item} content="house" />
                    ))}
                    {maklers?.map((item, i) => (
                      <UserContents key={i} data={item} content="master" />
                    ))}
                  </ul>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </section>
          <section
            className={`advert-s ${holdId !== 3 && "d-none"}`}
            id="archive"
          >
            <div className="container-sm">
              <div className="advert">
                <ul className="advert-list">
                  {stores
                    ?.filter((item) => item.product_status === 3)
                    ?.map((item) => (
                      <UserContents key={item.id} content="store" data={item} />
                    ))}
                </ul>
              </div>
            </div>
          </section>
          <section
            className={`advert-s ${holdId !== 4 && "d-none"}`}
            id="draft"
          >
            <div className="container-sm">
              <div className="advert">
                <div className="alert-advert">
                  <h5>Продвигайте свое объявление в ТОП!</h5>
                  <p>
                    Как только вы зарегистрируетесь в качестве мастера, вы
                    сможете получать заказы по направлениям, введенным через наш
                    портал!
                  </p>
                  <div className="alert-advert-btns">
                    <button className="btn btn-orange-50">
                      Активировать в топ
                    </button>
                    <a href="#">Подробнее </a>
                  </div>
                </div>
                <ul className="advert-list">
                  {houses &&
                    houses
                      ?.filter((item) => item.draft === true)
                      ?.map((item) => (
                        <UserContents
                          key={item.id}
                          content="house"
                          data={item}
                        />
                      ))}
                </ul>
              </div>
            </div>
          </section>
          <section
            className={`settings-s ${holdId !== 5 && "d-none"}`}
            id="settings"
          >
            <UserSettings
              img={userData?.avatar}
              name={userData?.first_name}
              number={userData?.phone_number}
              email={userData?.email}
              password={userData?.password}
            />
          </section>
          {/* <section className="chat-s d-none" id="chat">
            <div className="container">
              <div className="chat">
                <div className="chat__left">
                  <ul className="chat-list">
                    <li className="chat-item">
                      {" "}
                      <a href="#">
                        <div className="chat-item-logo">
                          <div className="logo">
                            {" "}
                            <span>HF</span>
                          </div>
                        </div>
                        <div className="chat-item-info">
                          <h5>Habibullo Farxodov</h5>
                          <p>
                            Был в сети: <span>18:32</span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="chat-item active">
                      <a href="#">
                        <div className="chat-item-logo">
                          <div className="logo">
                            {" "}
                            <picture>
                              <source
                                srcset="img/logo.webp"
                                type="image/webp"
                              />
                              <img src="img/logo.png" alt="logo" />
                            </picture>
                          </div>
                        </div>
                        <div className="chat-item-info">
                          <h5>Makler.uz</h5>
                          <p>
                            Был в сети: <span>18:32</span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="chat-item">
                      {" "}
                      <a href="#">
                        <div className="chat-item-logo">
                          <div className="logo">
                            {" "}
                            <span>HF</span>
                          </div>
                        </div>
                        <div className="chat-item-info">
                          <h5>Muhammad</h5>
                          <p>
                            Был в сети: <span>18:32</span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="chat-item">
                      {" "}
                      <a href="#">
                        <div className="chat-item-logo">
                          <div className="logo">
                            {" "}
                            <span>HF</span>
                          </div>
                        </div>
                        <div className="chat-item-info">
                          <h5>id:23904</h5>
                          <p>
                            Был в сети: <span>18:32</span>
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="chat-item">
                      {" "}
                      <a href="#">
                        <div className="chat-item-logo">
                          <div className="logo">
                            {" "}
                            <span>HF</span>
                          </div>
                        </div>
                        <div className="chat-item-info">
                          <h5>Rixsitillo Hamidov</h5>
                          <p>
                            Был в сети: <span>18:32</span>
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="chat__right">
                  <div className="chat-body">
                    <div className="chat-header">
                      <p>Чат</p>
                      <button className="btn">
                        <svg className="svg-sprite-icon icon-dots">
                          <use href={`${spirite}#dots`}></use>
                        </svg>
                      </button>
                    </div>
                    <ul className="chat-messages">
                      <li>
                        <p>
                          Привет! Уважаемый пользователь, мы хотели бы сообщить
                          вам, что, поскольку вы используете наш сайт, вам
                          предоставляется скидка на рекламу! Ура Ура Ура Ура!
                        </p>
                        <span className="chat-messages-time">09:02</span>
                      </li>
                      <li>
                        <p>
                          Привет! Уважаемый пользователь, мы хотели бы сообщить
                          вам, что, поскольку вы используете наш сайт, вам
                          предоставляется скидка на рекламу! Ура Ура Ура Ура!
                        </p>
                        <span className="chat-messages-time">09:02</span>
                      </li>
                      <li className="your-sms">
                        <span className="your-span">Вы</span>
                        <p>
                          Привет! Уважаемый пользователь, мы хотели бы сообщить
                          вам, что, поскольку вы используете наш сайт, вам
                          предоставляется скидка на рекламу! Ура Ура Ура Ура!
                        </p>
                        <span className="chat-messages-time">09:02</span>
                      </li>
                    </ul>
                    <div className="chat-footer">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Пишите ваш текст"
                          required=""
                        />
                        <button className="btn" type="submit">
                          <svg className="svg-sprite-icon icon-send fill-n">
                            <use href={`${spirite}#send`}></use>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <div className="cabinet-nav">
            <div className="cabinet-profile">
              <div className="cabinet-profile-logo">
                {" "}
                <picture>
                  <source srcSet={avatar_image} type="image/webp" />
                  <img src={avatar_image} alt="Логотип" />
                </picture>
              </div>
              <div className="cabinet-profile-info">
                <h4>Name: {userData?.first_name}</h4>
                <p>id: {userData?.id}</p>
                <p>Email: {userData?.email}</p>
              </div>
            </div>
            <ul className="cabinet-nav-list">
              {userCabinetNavigator.map((item) => (
                <li
                  className={`${holdId === item.id && "active"}`}
                  key={item.id}
                  onClick={() => setHoldId(item.id)}
                >
                  <button className="btn btn-orange-light left-icon">
                    <svg className={item.class}>
                      <use href={`${spirite}#${item.icon1}`}></use>
                    </svg>
                    <svg className="svg-sprite-icon icon-fi_book fill-n w-16">
                      <use href={`${spirite}#${item.icon2}`}></use>
                    </svg>
                    <span>{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
            <a
              className="logout-link left-icon"
              onClick={handleLogOut}
              id="log-out"
              style={{
                cursor: "pointer",
              }}
            >
              <svg className="svg-sprite-icon icon-fi_log-out-o fill-n w-16">
                <use href={`${spirite}#fi_log-out-o`}></use>
              </svg>
              <svg className="svg-sprite-icon icon-fi_log-out fill-n w-16">
                <use href={`${spirite}#fi_log-out`}></use>
              </svg>
              <span>Выйти из профиля</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCabinet;

import "./UserCabinet.scss";
import avatar from "../../assets/img/avatar-big.png";
import { UserContents } from "../../components";
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

const UserCabinet = () => {
  const [holdId, setHoldId] = useState(1);
  const { getUserData, userData } = useContext(ContextApp);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${baseURL}/users/api/v1/get-user/${id}`)
      .then((data) => getUserData(data.data))
      .catch(() => navigate("/"));
  }, []);

  console.log(userData);

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
                    <a href="#">Подробнее </a>
                  </div>
                </div>
                <ul className="advert-list">
                  {announceData.map((data) => (
                    <UserContents key={data.id} data={data} />
                  ))}
                </ul>
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
                  {archive.map((data) => (
                    <UserContents key={data.id} data={data} />
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
                  {draft.map((data) => (
                    <UserContents key={data.id} data={data} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section
            className={`settings-s ${holdId !== 5 && "d-none"}`}
            id="settings"
          >
            <UserSettings />
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
                  <source srcSet={avatar} type="image/webp" />
                  <img src={avatar} alt="Логотип" />
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
            <a className="logout-link left-icon" href="#" id="log-out">
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

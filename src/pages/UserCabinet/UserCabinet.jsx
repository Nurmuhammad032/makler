import "./UserCabinet.scss";
import avatar from "../../assets/img/avatar-big.png";
import { UserAnnouncements } from "../../components";
import spirite from "../../assets/img/symbol/sprite.svg";

const UserCabinet = () => {
  return (
    <section className="cabinet-s">
      <div className="container">
        <div className="cabinet" id="cabinet">
          <section className="advert-s" id="product">
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
                <UserAnnouncements />
              </div>
            </div>
          </section>
          <section className="advert-s d-none" id="archive">
            <div className="container-sm">
              <div className="advert">
                <ul className="advert-list">
                  <li className="advert-item">
                    <div className="advert-item__top">
                      <div className="advert-settings">
                        <button className="btn btn-settings">
                          <svg className="svg-sprite-icon icon-dots w-16">
                            <use href={`${spirite}#dots`}></use>
                          </svg>
                        </button>
                        <div className="advert-settings-body choose-body">
                          <ul>
                            <li>
                              {" "}
                              <a href="#">Активировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Деактивировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Изменить </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Удалить </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <picture>
                        <source srcset="img/cards/1.webp" type="image/webp" />
                        <img src="img/cards/1.png" alt="Картинка Объявления" />
                      </picture>
                    </div>
                    <div className="advert-item__bottom">
                      <div className="advert-item-info">
                        <div className="advert-item-info__top">
                          <p>2 Комнатая кв, 63м²</p>
                          <span>400$</span>
                        </div>
                        <div className="advert-item-info__bottom">
                          <p>Ташкент, Шайхантахурский район</p>
                          <span>22:52</span>
                        </div>
                        <ul className="statistic-list">
                          <li>
                            {" "}
                            <span>Просмотры: </span>
                            <strong>311</strong>
                          </li>
                          <li>
                            <span>Комментарии: </span>
                            <strong>13</strong>
                          </li>
                          <li>
                            <span>Лайки:</span>
                            <strong>209</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="advert-item-date">
                      <p>
                        Дата создание: <span>12 Август. 2022 | </span>
                        <span>19:32</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="advert-s d-none" id="draft">
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
                  <li className="advert-item">
                    <div className="advert-item__top">
                      <div className="advert-settings">
                        <button className="btn btn-settings">
                          <svg className="svg-sprite-icon icon-dots w-16">
                            <use href={`${spirite}#dots`}></use>
                          </svg>
                        </button>
                        <div className="advert-settings-body choose-body">
                          <ul>
                            <li>
                              {" "}
                              <a href="#">Активировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Деактивировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Изменить </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Удалить </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <picture>
                        <source srcset="img/cards/1.webp" type="image/webp" />
                        <img src="img/cards/1.png" alt="Картинка Объявления" />
                      </picture>
                    </div>
                    <div className="advert-item__bottom">
                      <div className="advert-item-info">
                        <div className="advert-item-info__top">
                          <p>2 Комнатая кв, 63м²</p>
                          <span>400$</span>
                        </div>
                        <div className="advert-item-info__bottom">
                          <p>Ташкент, Шайхантахурский район</p>
                          <span>22:52</span>
                        </div>
                        <ul className="statistic-list">
                          <li>
                            {" "}
                            <span>Просмотры: </span>
                            <strong>311</strong>
                          </li>
                          <li>
                            <span>Комментарии: </span>
                            <strong>13</strong>
                          </li>
                          <li>
                            <span>Лайки:</span>
                            <strong>209</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="advert-item-date">
                      <p>
                        Дата создание: <span>12 Август. 2022 | </span>
                        <span>19:32</span>
                      </p>
                    </div>
                  </li>
                  <li className="advert-item">
                    <div className="advert-item__top">
                      <div className="advert-settings">
                        <button className="btn btn-settings">
                          <svg className="svg-sprite-icon icon-dots w-16">
                            <use href={`${spirite}#dots`}></use>
                          </svg>
                        </button>
                        <div className="advert-settings-body choose-body">
                          <ul>
                            <li>
                              {" "}
                              <a href="#">Активировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Деактивировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Изменить </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Удалить </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <picture>
                        <source srcset="img/cards/2.webp" type="image/webp" />
                        <img src="img/cards/2.png" alt="Картинка Объявления" />
                      </picture>
                    </div>
                    <div className="advert-item__bottom">
                      <div className="advert-item-info">
                        <div className="advert-item-info__top">
                          <p>2 Комнатая кв, 63м²</p>
                          <span>400$</span>
                        </div>
                        <div className="advert-item-info__bottom">
                          <p>Ташкент, Шайхантахурский район</p>
                          <span>22:52</span>
                        </div>
                        <ul className="statistic-list">
                          <li>
                            {" "}
                            <span>Просмотры: </span>
                            <strong>311</strong>
                          </li>
                          <li>
                            <span>Комментарии: </span>
                            <strong>13</strong>
                          </li>
                          <li>
                            <span>Лайки:</span>
                            <strong>209</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="advert-item-date">
                      <p>
                        Дата создание: <span>12 Август. 2022 | </span>
                        <span>19:32</span>
                      </p>
                    </div>
                  </li>
                  <li className="advert-item">
                    <div className="advert-item__top">
                      <div className="advert-settings">
                        <button className="btn btn-settings">
                          <svg className="svg-sprite-icon icon-dots w-16">
                            <use href={`${spirite}#dots`}></use>
                          </svg>
                        </button>
                        <div className="advert-settings-body choose-body">
                          <ul>
                            <li>
                              {" "}
                              <a href="#">Активировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Деактивировать </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Изменить </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">Удалить </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <picture>
                        <source srcset="img/cards/3.webp" type="image/webp" />
                        <img src="img/cards/3.png" alt="Картинка Объявления" />
                      </picture>
                    </div>
                    <div className="advert-item__bottom">
                      <div className="advert-item-info">
                        <div className="advert-item-info__top">
                          <p>2 Комнатая кв, 63м²</p>
                          <span>400$</span>
                        </div>
                        <div className="advert-item-info__bottom">
                          <p>Ташкент, Шайхантахурский район</p>
                          <span>22:52</span>
                        </div>
                        <ul className="statistic-list">
                          <li>
                            {" "}
                            <span>Просмотры: </span>
                            <strong>311</strong>
                          </li>
                          <li>
                            <span>Комментарии: </span>
                            <strong>13</strong>
                          </li>
                          <li>
                            <span>Лайки:</span>
                            <strong>209</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="advert-item-date">
                      <p>
                        Дата создание: <span>12 Август. 2022 | </span>
                        <span>19:32</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="settings-s d-none" id="settings">
            <div className="container-sm">
              <div className="settings">
                <div className="settings-profile">
                  <div className="settings-profile-logo">
                    {" "}
                    <picture>
                      <source srcset="img/avatar-big.webp" type="image/webp" />
                      <img src="img/avatar-big.png" alt="Аватар" />
                    </picture>
                  </div>
                  <div className="settings-profile-info">
                    <h3>Abbos Janizakov</h3>
                    <button className="btn btn-border-orange">
                      Изменить фото профиля{" "}
                    </button>
                  </div>
                </div>
                <form className="settings-form">
                  <div className="form-input">
                    <label>Имя Фамилия</label>
                    <input type="text" value="Abbos Janizakov" />
                  </div>
                  <div className="form-input">
                    <label>Электронная почта</label>
                    <input type="text" value="abbosjanizakov@mail.ru" />
                  </div>
                  <div className="form-input">
                    <label>Номер телефона | Ваше логин</label>
                    <input type="text" value="+998 90 123-45-67" />
                  </div>
                  <div className="form-input">
                    <label>Пароль</label>
                    <input type="password" placeholder="пусто" />
                  </div>
                  <div className="change-password">
                    <h3>Изменить пароль</h3>
                    <p className="change-password-subtitle">
                      После создания постоянного пароля для своего профиля вам
                      необходимо будет подтвердить его с помощью прикрепленного
                      смс-кода!
                    </p>
                    <label>Пароль</label>
                    <input type="password" placeholder="пусто" />
                    <p className="change-password-par">
                      Создайте постоянный пароль для входа в аккаунт!
                    </p>
                  </div>
                  <button className="btn btn-orange">
                    Сохранить изменения
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className="chat-s d-none" id="chat">
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
          </section>
          <div className="cabinet-nav">
            <div className="cabinet-profile">
              <div className="cabinet-profile-logo">
                {" "}
                <picture>
                  <source srcset={avatar} type="image/webp" />
                  <img src={avatar} alt="Логотип" />
                </picture>
              </div>
              <div className="cabinet-profile-info">
                <h4>Abbos Janizakov</h4>
                <p>id:123981</p>
              </div>
            </div>
            <ul className="cabinet-nav-list">
              <li className="active">
                <button
                  className="btn btn-orange-light left-icon"
                  id="product-link"
                >
                  <svg className="svg-sprite-icon icon-fi_book-o fill-n w-16">
                    <use href={`${spirite}#fi_book-o`}></use>
                  </svg>
                  <svg className="svg-sprite-icon icon-fi_book fill-n w-16">
                    <use href={`${spirite}#fi_book`}></use>
                  </svg>
                  <span>Мои объявления</span>
                </button>
              </li>
              <li>
                <button
                  className="btn btn-orange-light left-icon"
                  id="notifications-link"
                >
                  <svg className="svg-sprite-icon icon-fi_mail-o fill-n w-16">
                    <use href={`${spirite}#fi_mail-o`}></use>
                  </svg>
                  <svg className="svg-sprite-icon icon-fi_mail fill-n w-16">
                    <use href={`${spirite}#fi_mail`}></use>
                  </svg>
                  <span>Уведомлении</span>
                </button>
              </li>
              <li>
                <button
                  className="btn btn-orange-light left-icon"
                  id="draft-link"
                >
                  <svg className="svg-sprite-icon icon-fi_book-o fill-n w-16">
                    <use href={`${spirite}#fi_book-o`}></use>
                  </svg>
                  <svg className="svg-sprite-icon icon-fi_book fill-n w-16">
                    <use href={`${spirite}#fi_book`}></use>
                  </svg>
                  <span>Черновик</span>
                </button>
              </li>
              <li>
                <button
                  className="btn btn-orange-light left-icon"
                  id="archive-link"
                >
                  <svg className="svg-sprite-icon icon-fi_archive-o fill-n w-16">
                    <use href={`${spirite}#fi_archive-o`}></use>
                  </svg>
                  <svg className="svg-sprite-icon icon-fi_archive fill-n w-16">
                    <use href={`${spirite}#fi_archive`}></use>
                  </svg>
                  <span>Архив</span>
                </button>
              </li>
              <li>
                <button
                  className="btn btn-orange-light left-icon"
                  id="settings-link"
                >
                  <svg className="svg-sprite-icon icon-fi_settings-o fill-n w-16">
                    <use href={`${spirite}#fi_settings-o`}></use>
                  </svg>
                  <svg className="svg-sprite-icon icon-fi_settings fill-n w-16">
                    <use href={`${spirite}#fi_settings`}></use>
                  </svg>
                  <span>Настроить профиль</span>
                </button>
              </li>
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

import React from "react";
import card from "../../assets/img/cards/1.png";
import spirite from "../../assets/img/symbol/sprite.svg";

// img/symbol/sprite.svg#dots
const UserAnnouncements = () => {
  return (
    <ul className="advert-list">
      <li className="advert-item">
        <div className="advert-item__top">
          <div className="advert-item-status wait-status">
            {" "}
            <span className="advert-item-status-icon">
              <svg className="svg-sprite-icon icon-dots-horizontal fill-n">
                <use href={`${spirite}#dots-horizontal`}></use>
              </svg>
            </span>
            <span>Ожидание подтверждения</span>
          </div>
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
            <source srcset={card} type="image/webp" />
            <img src={card} alt="Картинка Объявления" />
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
  );
};

export default UserAnnouncements;

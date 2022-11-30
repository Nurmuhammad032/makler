import React, { useState } from "react";
import card from "../../assets/img/cards/1.png";
import spirite from "../../assets/img/symbol/sprite.svg";

// img/symbol/sprite.svg#dots
const UserContents = ({ data }) => {
  const [display, setDisplay] = useState(false);
  
  return (
    <li className="advert-item">
      <div className="advert-item__top">
        {"pendingType" in data && (
          <div className="advert-item-status wait-status">
            {" "}
            <span className="advert-item-status-icon">
              <svg className="svg-sprite-icon icon-dots-horizontal fill-n">
                <use href={`${spirite}#dots-horizontal`}></use>
              </svg>
            </span>
            <span>{data.pendingType}</span>
          </div>
        )}
        <div className="advert-settings">
          <button
            className="btn btn-settings"
            onClick={() => setDisplay((prev) => !prev)}
          >
            <svg className="svg-sprite-icon icon-dots w-16">
              <use href={`${spirite}#dots`}></use>
            </svg>
          </button>
          <div
            className={`advert-settings-body choose-body ${
              display && "active"
            }`}
          >
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
          <source srcSet={card} type="image/webp" />
          <img src={card} alt="Картинка Объявления" />
        </picture>
      </div>
      <div className="advert-item__bottom">
        <div className="advert-item-info">
          <div className="advert-item-info__top">
            <p>2 Комнатая кв, 63м²</p>
            <span>{data.price}$</span>
          </div>
          <div className="advert-item-info__bottom">
            <p>Ташкент, Шайхантахурский район</p>
            <span>22:52</span>
          </div>
          <ul className="statistic-list">
            <li>
              {" "}
              <span>Просмотры: </span>
              <strong>{data.pm}</strong>
            </li>
            <li>
              <span>Комментарии: </span>
              <strong>{data.comment}</strong>
            </li>
            <li>
              <span>Лайки:</span>
              <strong>{data.like}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="advert-item-date">
        <p>
          {/* Дата создание: <span>12 Август. 2022 | </span>

            <span>19:32</span> */}
          {data.date}
        </p>
      </div>
    </li>
  );
};

export default UserContents;

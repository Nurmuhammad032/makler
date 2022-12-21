import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import spirite from "../../assets/img/symbol/sprite.svg";

const UserContents = ({ data, content }) => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  console.log(data);
  const handleClick = () => {
    switch (content) {
      case "house":
        navigate(`/edit-house/${data.id}`);
        break;
      case "store":
        navigate(`/edit-store/${data.id}`);
        break;
      case "master":
        navigate(`/edit-master/${data.pk}`);
        break;
      default:
        break;
    }
  };

  const deleteData = (url, id) => {
    axios
      .delete(`${url}/${id}/`)
      .then(() => {
        toast.success("Успешно");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ошибка!");
      });
  };

  const clickHandle = () => {
    switch (content) {
      case "house":
        deleteData(
          "https://fathulla.tk/products/api/v1/houses/delete",
          data.id
        );
        break;
      case "store":
        deleteData("https://fathulla.tk/store2/api/v1/store/delete", data.id);
        break;
      case "master":
        deleteData("https://fathulla.tk/master/api/v1/maklers/delete", data.pk);
        break;
      default:
        break;
    }
  };
  console.log(data);

  return (
    <li className="advert-item">
      <div className="advert-item__top">
        <div
          className={`advert-item-status ${
            data.product_status === 0
              ? "wait-status"
              : data.product_status === 1
              ? "done-status"
              : data.product_status === 2 && "error-status"
          }`}
        >
          {" "}
          <span className="advert-item-status-icon">
            <svg className="svg-sprite-icon icon-dots-horizontal fill-n">
              <use href={`${spirite}#dots-horizontal`}></use>
            </svg>
          </span>
          <span>
            {data.product_status === 0
              ? "Ожидание подтверждения"
              : data.product_status === 1
              ? "Подтвержден"
              : data.product_status === 2 && "Отказaна!"}
          </span>
        </div>

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
              <li
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                }}
              >
                {" "}
                <a>Изменить </a>
              </li>
              <li
                onClick={clickHandle}
                style={{
                  cursor: "pointer",
                }}
              >
                {" "}
                <a>Удалить </a>
              </li>
            </ul>
          </div>
        </div>
        <picture>
          {"images" in data ? (
            <>
              <source srcSet={data.images[0]?.images} type="image/webp" />
              <img src={data.images[0]?.images} alt="Картинка Объявления" />
            </>
          ) : "avatar" in data ? (
            <>
              <source srcSet={data.avatar} type="image/webp" />
              <img src={data.avatar} alt="Картинка Объявления" />
            </>
          ) : (
            <>
              <source srcSet={data.image} type="image/webp" />
              <img src={data.image} alt="Картинка Объявления" />
            </>
          )}
        </picture>
      </div>
      <div className="advert-item__bottom">
        <div className="advert-item-info">
          <div className="advert-item-info__top">
            <p>{"name" in data ? data.name : data.title}</p>
            <span>{"price" in data ? `${data.price}$` : data.phone}</span>
          </div>
          <div className="advert-item-info__bottom">
            <p>{"address" in data ? data.address : data.web_address_title}</p>
            {/* <span>22:52</span> */}
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
    // <h1>fjadsl</h1>
  );
};

export default UserContents;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useForm from "../../hooks/useForm";

const UserSettings = ({ name, email, password, number, img }) => {
  const [file, setFile] = useState();

  const [data, setData] = useState({
    name,
    email,
    password,
    number,
  });

  useEffect(() => {
    setData({
      name: name,
      email: email,
      password: password,
      number: number,
    });
  }, [name, email, password, number]);

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {};
  };

  return (
    <div className="container-sm">
      <div className="settings">
        <div className="settings-profile">
          <div className="settings-profile-logo">
            {" "}
            <picture>
              <source srcSet={img} type="image/webp" />
              <img src={img} alt="Аватар" />
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
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={data?.name}
            />
          </div>
          <div className="form-input">
            <label>Электронная почта</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={data?.email}
            />
          </div>
          <div className="form-input">
            <label>Номер телефона | Ваше логин</label>
            <input
              type="text"
              name="number"
              onChange={handleChange}
              value={data?.number}
            />
          </div>
          <div className="form-input">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="пусто"
              name="password"
              onChange={handleChange}
              value={data?.password}
            />
          </div>
          <div className="change-password">
            <h3>Изменить пароль</h3>
            <p className="change-password-subtitle">
              После создания постоянного пароля для своего профиля вам
              необходимо будет подтвердить его с помощью прикрепленного
              смс-кода!
            </p>
            <label>Пароль</label>
            <input
              type="password"
              placeholder="пусто"
              name="password"
              value={data?.password}
            />
            <p className="change-password-par">
              Создайте постоянный пароль для входа в аккаунт!
            </p>
          </div>
          <button className="btn btn-orange">Сохранить изменения</button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;

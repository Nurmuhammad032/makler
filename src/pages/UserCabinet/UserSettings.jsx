import React from "react";

const UserSettings = () => {
  return (
    <div className="container-sm">
      <div className="settings">
        <div className="settings-profile">
          <div className="settings-profile-logo">
            {" "}
            <picture>
              <source srcSet="img/avatar-big.webp" type="image/webp" />
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
          <button className="btn btn-orange">Сохранить изменения</button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;

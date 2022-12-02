import React from 'react'
import avatar_image from "../.././assets/img/avatar_change.png"
import './EditPage.css'

export default function EditPage() {
  return (
    <div>
        <div className="editpage__card">
                <div className="edit__left__card">
                    <h1 className="edit__card__title">Регистрируйтес как мастер, получите работы</h1>
                    <p className="edit__card__text">Объявление будет доступно на <a target={"_blank"} className="text__link" href="">Makler.uz</a> и в наших мобильных приложениях</p>
                    <div className="card__header">
                        <img className="avatar__img" src={avatar_image} alt="avatar image" />
                        <div className="image__card">
                            <p className="avatar__name">
                                Загрузите фото профиля или логотп компании
                            </p>
                            <button className="change__btn">Изменить фото профиля</button>
                        </div>
                    </div>
                    <div className="editpage__input">
                        <form

                            className="form__input"
                            action=""
                            method={"post"}
                        >
                            <label htmlFor="">
                                <span>Имя Фамилия</span>
                                <input name={"name"} id="name" type={"text"} placeholder="Abbos Janizakov" />
                            </label>
                            <label id="email" htmlFor="">
                                <span>Электронная почта</span>
                                <input name={"email"} type={"email"} placeholder="info@gmail.com" />
                            </label>
                            <label htmlFor="">
                                <span>Номер телефона | Ваше логин</span>
                                <input name={"phone number"} type={"number"} placeholder="+998 90 123-45-67" />
                            </label>
                            <label htmlFor="">
                                <span>Пароль</span>
                                <input name={"password"} type="password" placeholder="пусто" />
                            </label>
                            <label htmlFor="">
                                <span className="text__area">Краткое описание о себе</span>
                                <textarea className="textarea" id="" placeholder="пусто"></textarea>
                            </label>

                        </form>
                    </div>
                    <div className="second-card">
                        <div className="second__card">
                            <h2 className="second__card__title">Выберите раздел и специализацию *</h2>
                            <p className="second__card__text">Введите род деятельности!</p>
                        </div>
                        <select className="select" name="ergerg" id="" placeholder="Сантехник">
                            <option className="select__option" value="service">Сантехник</option>
                            <option className="select__option" value="service">Мебельщик</option>
                            <option className="select__option" value="service">Уборшик</option>
                            <option className="select__option" value="service">Электрик</option>
                            <option className="select__option" value="service">Мастер окон</option>
                        </select>
                    </div>
                    <div className="map--box">
                        <form action="">
                            <label className="map__address" htmlFor="">Укажите зону обслуживания!</label>
                            <input className="map__input" type="text" />
                            <button className="map__btn" >Сохранить</button>
                        </form>
                        <iframe className="map__google" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.508298798211!2d74.5708881!3d42.8674796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1669904023735!5m2!1sru!2s" width="440" height="260"frameBorder={"none"} ></iframe>
                    </div>

                    <div className="checkbox">
                        <input className="checkbox__input" type={"checkbox"} name="" id="" />
                        <span className="checkbox__text">Я прочитал и согласен с условиями использования и публикации!</span>
                    </div>

                    <div className="register">
                        <form action="">
                            <button className="register__btn">Зарегистрироватся</button>
                        </form>
                    </div>
                </div>
                <div className="edit__right__card">
                    <div className="edit__card">
                        <div className="edit__card__content">
                            <h2 className="right__card__title">Краткое описание о нашем сервисе</h2>
                            <p className="edit__card__text">Регистрация как мастер</p>
                            <p>Как только вы зарегистрируетесь в качестве мастера, вы сможете получать заказы по направлениям, введенным через наш портал!</p>
                            <div className="blockquote__card">
                                <em className="blockquote__text">Напоминаем, что мы не несем ответственности за сбор платы за услуги через этот портал!</em>
                            </div>
                            <p>При регистрации вы вводите свой номер телефона в качестве логина и придумываете себе пароль. Нажав кнопку входа, вы введете свой номер телефона и пароль для доступа к существующему профилю.</p>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
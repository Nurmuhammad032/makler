import "./SingleProduct.scss";
import sprite from "../../assets/img/symbol/sprite.svg";
import {
  DownloadApp,
  FooterMenu,
  LoadingPost,
  SliderContent,
} from "../../components";
import img1 from "../../assets/img/slider/1.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import ContextApp from "../../context/context";

const img = [img1, img1, img1, img1];

const SingleProduct = () => {
  const { id } = useParams();
  const [loading, setLaoding] = useState(true);
  const { houseData, getHouseData } = useContext(ContextApp);

  useEffect(() => {
    axios
      .get(`https://fathulla.tk/products/web/api/v1/houses/${id}`)
      .then((data) => {
        getHouseData(data.data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLaoding(false));
  }, []);

  return (
    <div
      style={{
        padding: "2rem 0",
      }}
    >
      {loading && <LoadingPost />}
      <section className="slider-s">
        <div className="container">
          <div className="slider-body">
            <div
              className="slider__left"
              style={{
                position: "relative",
              }}
            >
              <div className="swiper">
                {houseData?.images.length && (
                  <SliderContent imgUrl={houseData?.images} />
                )}
              </div>
            </div>
            <div className="slider__right">
              <ul>
                {houseData?.images.length &&
                  houseData?.images.map((item, i) => (
                    <li key={i}>
                      {" "}
                      <img src={item.images} alt="Картинка 1" />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="info-product-s">
        <div className="container">
          <h2 className="product-info-title">{houseData?.title}</h2>
          <p className="product-info-par">{houseData?.web_address_title}</p>
          <div className="info-product">
            <div className="info-product-sidebar">
              <div className="plashka">
                <h4>Стоимость за месяц:</h4>
                <strong>{houseData?.price} сум</strong>
                <a className="btn btn-orange" href="tel:035252434">
                  Позвонить маклеру
                </a>
              </div>
            </div>
            <div className="info-product-main">
              <h2 className="info-product-title">
                Аренда для девушек - студенток.Метро Максима Горького.
              </h2>
              <h5 className="product-small-title">Вся информация</h5>
              <ul className="tags-list">
                <li className="tags-item">
                  {" "}
                  <span>Тип аренды</span>
                  <p>Длительно</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Тип недвижимости</span>
                  <p>Жилая</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Объект</span>
                  <p>Квартира</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Этаж</span>
                  <p>3</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Жилая площадь</span>
                  <p>54 кв</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Плошадь Кухня</span>
                  <p>24 кв</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Кол-во комнат</span>
                  <p>4</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Общая плошадь</span>
                  <p>53 кв</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Этажность дома</span>
                  <p>9</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Тип строения</span>
                  <p>Кирпич</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Ипотека</span>
                  <p>Да</p>
                </li>
                <li className="tags-item">
                  {" "}
                  <span>Мебелирование</span>
                  <p>Да</p>
                </li>
              </ul>
              <h5 className="product-small-title">Описание</h5>
              <p className="product-par par">
                A warehouse for storing goods is available for rent. There is a
                free area (land plot of 2 hectares) for the buildings of
                production workshops, mini-factories, etc. Our warehouse is
                located in the city of Tashkent, Sergeli industrial zone,
                opposite the Sergeli Logistic customs post. Convenient location,
                on a central road, there are all communications, a warehouse of
                more than 3000 square meters.
              </p>
              <h5 className="product-small-title">Все удобства</h5>
              <ul className="comfort-tags-list"> </ul>
              <div className="show-on-map">
                <div className="show-on-map-address">
                  <svg className="svg-sprite-icon icon-fi_navigation w-16 fill-w">
                    <use href={`${sprite}#fi_navigation`}></use>
                  </svg>
                  <span>р.Мирзо Улугбекский, ул. Ахангаран, 65 А кв 1.</span>
                </div>
                <button className="btn btn-black btn-black-big">
                  показать на карте
                </button>
              </div>
              <h5 className="product-small-title">Рекомендуем похожие </h5>
            </div>
          </div>
          <div className="cards">
            {/* <ul className="cards-list"> 
                <li className="cards-item"> <a href="#"> 
                    <div className="cards-item__top"> 
                      <button className="btn-save">
                        <svg className="svg-sprite-icon icon-save">
                          <use href={`${sprite}#save`}></use>
                        </svg>
                      </button><img src="img/cards/1.png" alt="">
                    </div>
                    <div className="cards-item__bottom">
                      <div className="cards-item-info"> 
                        <div className="cards-item-info__top">
                          <p>2 Комнатая кв, 63м²</p><span>400$</span>
                        </div>
                        <div className="cards-item-info__bottom"> 
                          <p>Ташкент, Шайхантахурский район</p><span>22:52</span>
                        </div>
                      </div>
                    </div></a></li>
                <li className="cards-item"> <a href="#"> 
                    <div className="cards-item__top"> 
                      <button className="btn-save">
                        <svg className="svg-sprite-icon icon-save">
                          <use href={`${sprite}#save`}></use>
                        </svg>
                      </button><img src="img/cards/2.png" alt="">
                    </div>
                    <div className="cards-item__bottom">
                      <div className="cards-item-info"> 
                        <div className="cards-item-info__top">
                          <p>2 Комнатая кв, 63м²</p><span>400$</span>
                        </div>
                        <div className="cards-item-info__bottom"> 
                          <p>Ташкент, Шайхантахурский район</p><span>22:52</span>
                        </div>
                      </div>
                    </div></a></li>
                <li className="cards-item"> <a href="#"> 
                    <div className="cards-item__top"> 
                      <button className="btn-save">
                        <svg className="svg-sprite-icon icon-save">
                          <use href={`${sprite}#save`}></use>
                        </svg>
                      </button><img src="img/cards/3.png" alt="">
                    </div>
                    <div className="cards-item__bottom">
                      <div className="cards-item-info"> 
                        <div className="cards-item-info__top">
                          <p>2 Комнатая кв, 63м²</p><span>400$</span>
                        </div>
                        <div className="cards-item-info__bottom"> 
                          <p>Ташкент, Шайхантахурский район</p><span>22:52</span>
                        </div>
                      </div>
                    </div></a></li>
                <li className="cards-item"> <a href="#"> 
                    <div className="cards-item__top"> 
                      <button className="btn-save">
                        <svg className="svg-sprite-icon icon-save">
                          <use href={`${sprite}#save`}></use>
                        </svg>
                      </button><img src="img/cards/4.png" alt="">
                    </div>
                    <div className="cards-item__bottom">
                      <div className="cards-item-info"> 
                        <div className="cards-item-info__top">
                          <p>2 Комнатая кв, 63м²</p><span>400$</span>
                        </div>
                        <div className="cards-item-info__bottom"> 
                          <p>Ташкент, Шайхантахурский район</p><span>22:52</span>
                        </div>
                      </div>
                    </div></a></li>
              </ul> */}
          </div>
        </div>
      </section>
      <FooterMenu />
      <DownloadApp />
    </div>
  );
};

export default SingleProduct;

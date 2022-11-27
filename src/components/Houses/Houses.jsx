import { useContext } from "react";
import ContextApp from "../../context/context";
import sprite from "../../assets/img/symbol/sprite.svg";

const Houses = () => {
  const { allHouses } = useContext(ContextApp);
  return (
    <section className="cards-s">
      <div className="container">
        <div className="cards">
          <div className="cards-head">
            <h4>Рекомендованные ЖК</h4>
            <ul>
              <li>
                {" "}
                <a href="#">
                  <svg className="svg-sprite-icon icon-fi_chevron-left w-12">
                    <use href={`${sprite}#fi_chevron-left`}></use>
                  </svg>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <svg className="svg-sprite-icon icon-fi_chevron-left w-12">
                    <use href={`${sprite}#fi_chevron-left`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <ul className="cards-list" id="houses-list">
            {allHouses?.map((item) => (
              <li className="cards-item" key={item.id}>
                <a href="/product.html">
                  <div className="cards-item__top">
                    <button className="btn-save">
                      <svg className="svg-sprite-icon icon-save">
                        <use href={`${sprite}#save`}></use>
                      </svg>
                    </button>
                    <img
                      src={item.images.length && item.images[0].images}
                      alt={item.title}
                    />
                  </div>
                  <div className="cards-item__bottom">
                    <div className="cards-item-info">
                      <div className="cards-item-info__top">
                        <p>{item.title}</p>
                        <span>{item.price}</span>
                      </div>
                      <div className="cards-item-info__bottom"></div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <button className="btn btn-big btn-white" id="show-more">
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
};

export default Houses;

import { useContext } from "react";
import ContextApp from "../../context/context";
import sprite from "../../assets/img/symbol/sprite.svg";
import ProductCard from "../ProductCard/ProductCard";

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
              <ProductCard key={item.id} data={item} />
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

import { Link } from "react-router-dom";
import sprite from "../../assets/img/symbol/sprite.svg";

const ProductCard = ({ data }) => {
  return (
    <li className="cards-item">
      <Link to={`/product/${data.id}`}>
        <div className="cards-item__top">
          <button className="btn-save">
            <svg className="svg-sprite-icon icon-save">
              <use href={`${sprite}#save`}></use>
            </svg>
          </button>
          <img
            src={data.images.length && data.images[0].images}
            alt={data.title}
          />
        </div>
        <div className="cards-item__bottom">
          <div className="cards-item-info">
            <div className="cards-item-info__top">
              <p>{data.title}</p>
              <span>{data.price}</span>
            </div>
            <div className="cards-item-info__bottom"></div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;

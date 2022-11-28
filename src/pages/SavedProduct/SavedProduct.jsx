import sprite from "../../assets/img/symbol/sprite.svg";

const SavedProduct = () => {
  return (
    <div className="content">
      <section className="save-products-s">
        <div className="container">
          <div className="save-products">
            <ul className="cards-list">
              <li className="cards-item">
                {" "}
                <a href="/product.html">
                  <div className="cards-item__top">
                    <button className="btn-save save">
                      <svg className="svg-sprite-icon icon-save">
                        <use href={`${sprite}#save`}></use>
                      </svg>
                    </button>
                    <img src="img/cards/1.png" alt="" />
                  </div>
                  <div className="cards-item__bottom">
                    <div className="cards-item-info">
                      <div className="cards-item-info__top">
                        <p>2 Комнатая кв, 63м²</p>
                        <span>400$</span>
                      </div>
                      <div className="cards-item-info__bottom">
                        <p>Ташкент, Шайхантахурский район</p>
                        <span>22:52</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavedProduct;

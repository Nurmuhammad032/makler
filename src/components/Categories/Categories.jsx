import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextApp from "../../context/context";
import "./Categories.scss";

const Categories = () => {
  const { categories } = useContext(ContextApp);
  return (
    <section className="categories-s">
      <div className="container">
        <div className="categories">
          <ul id="categories-list">
            {categories?.map((item, i) => (
              <li key={i}>
                <Link to="/categories${i + 1}.html">
                  <div className="info">
                    <h2>{item.title}</h2>
                    <p>Более 1240 новых домов</p>
                  </div>
                  <div className="img">
                    <img src={item.image} alt={item.title} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Categories;

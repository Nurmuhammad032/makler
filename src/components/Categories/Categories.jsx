import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextApp from "../../context/context";
import "./Categories.scss";

const links = ["", "master", "industria"];

const Categories = () => {
  const { categories } = useContext(ContextApp);
  return (
    <section className="categories-s">
      <div className="container">
        <div className="categories">
          <ul
            id="categories-list"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {categories?.map((item, i) => (
              <li key={i}>
                <Link to={`${links[i]}`}>
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

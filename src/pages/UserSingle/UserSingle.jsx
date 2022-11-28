import "./UserSingle.scss";
import UserImg from "../../assets/img/avatar-big.png";
import { UserCard } from "../../components";

const UserSingle = () => {
  return (
    <section
      className="content"
      style={{
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div className="app__worker-wrapper">
          <div className="app__worker-left">
            <div className="user-card">
              <img src={UserImg} alt="User image" />
              <div className="user-info">
                <h4 className="user-name">Abduvali Eshonqulov</h4>
                <p className="user-level">Мастер, 3 года опыта</p>
              </div>
              <div className="info-cards">
                <span className="info-box">сантехник</span>
                <span className="info-box">евро</span>
                <span className="info-box">ремонт</span>
                <span className="info-box">ремонт</span>
                <span className="info-box">электрик</span>
              </div>
              <p className="user-loc">Ташкент, Шайхантахурский район</p>
            </div>
            <div className="app__worker-info--wrapper">
              <div className="app__worker-info">
                <h1>+998 90 123-45-67</h1>
                <p>info@gmail.com</p>
              </div>
              <button className="worker-btn">Написать мастеру</button>
            </div>
          </div>
          <div className="app__worker-right">
            <h1>Описание</h1>
            <p>
              A warehouse for storing goods is available for rent. There is a
              free area (land plot of 2 hectares) for the buildings of
              production workshops, mini-factories, etc. Our warehouse is
              located in the city of Tashkent, Sergeli industrial zone, opposite
              the Sergeli Logistic customs post. Convenient location, on a
              central road, there are all communications, a warehouse of more
              than 3000 square meters.
            </p>
          </div>
        </div>
        <div
          className=""
          style={{
            marginTop: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Рекомендуем похожие
          </h1>
          <div className="workers-group">
            {[1, 1, 1, 1].map((_, i) => (
              <UserCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSingle;

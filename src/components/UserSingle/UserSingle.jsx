import "./UserSingle.scss";
import UserImg from "../../assets/img/avatar-big.png";
import { UserCard } from "../../components";

const UserSingle = ({ data }) => {
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
                <h4 className="user-name">{data.name}</h4>
                <p className="user-level">{data.jobInfo}</p>
              </div>
              <div className="info-cards">
                {data.skills.map((item) => (
                  <span key={item} className="info-box">
                    {item}
                  </span>
                ))}
              </div>
              <p className="user-loc">{data.address}</p>
            </div>
            <div className="app__worker-info--wrapper">
              <div className="app__worker-info">
                <h1>{data.telNumber}</h1>
                <p>{data.email}</p>
              </div>
              <button className="worker-btn">Написать мастеру</button>
            </div>
          </div>
          <div className="app__worker-right">
            <h1>Описание</h1>
            <p>{data.info}</p>
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
            {[1, 1, 1, 1].map((item, i) => (
              // <UserCard key={i} />
              <div key={i}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSingle;

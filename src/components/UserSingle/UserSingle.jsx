import "./UserSingle.scss";
import UserImg from "../../assets/img/avatar-big.png";
import { UserCard } from "../../components";
{
  /*  */
}
const UserSingle = ({ data }) => {
  return (
    <>
      {data ? (
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
                    <h4 className="user-name">{data?.name}</h4>
                    <p className="user-level">
                      {"experience" in data
                        ? `Мастер, ${data.experience} года опыта`
                        : "use_for" in data
                        ? data.use_for
                        : ""}
                    </p>
                  </div>
                  {"profession" in data && (
                    <div className="info-cards">
                      {data?.profession.map((item, i) => (
                        <span key={i} className="info-box">
                          {item.title}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="user-loc">
                    {typeof data.address !== "string"
                      ? data.address.addressName
                      : data.address}
                  </p>
                </div>
                <div className="app__worker-info--wrapper">
                  <div className="app__worker-info">
                    <h1>
                      {"telNumber" in data
                        ? data?.telNumber
                        : "phone" in data
                        ? data?.phone
                        : ""}
                    </h1>
                    <p>{data?.email}</p>
                  </div>
                  <button className="worker-btn">Написать мастеру</button>
                </div>
              </div>
              <div className="app__worker-right">
                <h1>Описание</h1>
                <p>{data?.description}</p>
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
      ) : (
        <h1>Something went wrong!</h1>
      )}
    </>
  );
};

export default UserSingle;

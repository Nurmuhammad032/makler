import "./UserSingle.scss";
import UserImg from "../../assets/img/avatar-big.png";
import { LoadingPost, ProductSingle, UserCard } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../requests/requests";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
{
  /*  */
}
const UserSingle = ({ data, id }) => {
  const [masterData, setMasterData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(masterData);
  const router = useLocation();
  const getData = (url, setData) => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/${url}`)
      .then((res) => setData(res.data.results))
      .catch(() => {
        toast.error("Something went wrong while uploading recommends");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData("store2/api/v1/store/popular", setStoreData);
  }, [id]);
  useEffect(() => {
    getData("master/api/v1/maklers/popular", setMasterData);
  }, [id]);

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
                  <img
                    src={
                      "brand_image" in data ? data.brand_image : data?.avatar
                    }
                    alt="User image"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
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
                      ? data.address_title
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
                <p>
                  {"description" in data
                    ? data.description
                    : data?.descriptions}
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
              <div
                className="workers-group"
                style={{
                  minHeight: "450px",
                }}
              >
                {isLoading ? (
                  <Loading />
                ) : router.pathname.includes("industria") ? (
                  storeData
                    ?.filter((_, i) => i <= 3)
                    ?.map((item, i) => <ProductSingle key={i} data={item} />)
                ) : (
                  masterData
                    ?.filter((_, i) => i <= 3)
                    ?.map((item, i) => <UserCard key={i} data={item} />)
                )}
              </div>
            </div>
            {/* <div>lfjadsk;jfdslk</div> */}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default UserSingle;

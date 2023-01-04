import React from "react";
import "./UserCard.css";
import UserImg from "../../assets/img/avatar-big.png";
import { Link } from "react-router-dom";

const UserCard = ({ data }) => {
  return (
    <Link to={`/master/${"pk" in data ? data?.pk : data?.id}`}>
      <div
        className="main-card"
        style={{
          marginTop: "1rem",
        }}
      >
        <div className="master-card">
          <img
            src={"avatar" in data ? data.avatar : data.image}
            alt="User image"
            // width={"40px"}
            // height="40px"
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "5px 5px 0 0",
            }}
          />
          <div className="user-card">
            <div className="user-info">
              <h4 className="user-name">{data.name}</h4>
              <p className="user-level">Мастер, {data.experience} года опыта</p>
            </div>
            <div className="info-cards">
              {data?.profession?.map((item) => (
                <span
                  className="info-box"
                  style={{
                    color: "black",
                  }}
                  key={item.title}
                >
                  {item.title}
                </span>
              ))}
            </div>
            <p className="user-loc">{data.address_title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;

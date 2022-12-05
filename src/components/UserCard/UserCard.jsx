import React from "react";
import "./UserCard.css";
import UserImg from "../../assets/img/avatar-big.png";
import { Link } from "react-router-dom";

const UserCard = ({ data }) => {
  return (
    <Link to={`${data?.pk}`}>
      <div
        className="main-card"
        style={{
          marginTop: "1rem",
        }}
      >
        <div className="master-card">
          <div className="user-card">
            <img
              src={data.avatar}
              alt="User image"
              width={"40px"}
              height="40px"
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div className="user-info">
              <h4 className="user-name">{data.name}</h4>
              <p className="user-level">Мастер, {data.experience} года опыта</p>
            </div>
            <div className="info-cards">
              {data.profession.map((item) => (
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

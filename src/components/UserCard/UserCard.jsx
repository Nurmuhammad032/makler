import React from "react";
import "./UserCard.css";
import UserImg from "../../assets/img/avatar-big.png";

const UserCard = ({ data }) => {
  return (
    <div>
      <div
        className="main-card"
        style={{
          marginTop: "1rem",
        }}
      >
        <div className="master-card">
          <div className="user-card">
            <img src={data.avatar} alt="User image" />
            <div className="user-info">
              <h4 className="user-name">{data.name}</h4>
              <p className="user-level">Мастер, {data.experience} года опыта</p>
            </div>
            <div className="info-cards">
              {data.profession.map((item) => (
                <span className="info-box" key={item.title}>{item.title}</span>
              ))}
            </div>
            <p className="user-loc">{data.address.addressName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

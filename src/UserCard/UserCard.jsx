import React from "react";
import "./UserCard.css";
import UserImg from "../img/avatar-big.png";

export default function UserCard() {
  return (
    <div>
      <div className="main-card">
        <div className="master-card">
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
        </div>
      </div>
    </div>
  );
}

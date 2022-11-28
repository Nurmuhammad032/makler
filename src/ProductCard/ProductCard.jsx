import React from "react";
import "./ProductCard.css";
import logo from "../img/icon.svg";
import freeze from "../img/freeze.png";

export default function ProductCard() {
  return (
    <div>
      <div className="product-card">
        <div className="header-card">
          <img className="logo" src={logo} alt="logotip" />
          <span className="product-title">iTechhouse</span>
        </div>
        <div className="product-main">
          <img src={freeze} alt="" />
        </div>
        <div className="product-footer">
          <div className="product-info">
            <p className="product-name">Стиралная машина</p>
            <em className="product-type">Техника для дома</em>
          </div>
          <p className="product-price">$670</p>
        </div>
      </div>
    </div>
  );
}

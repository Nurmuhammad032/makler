import React from "react";
import "./ProductPage.css";
import logo from "../../assets/img/icon.svg";
import freeze from "../../assets/img/freeze.png";
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  return (
    <Link
      to={`${data.id}`}
      style={{
        display: "block",
        marginTop: "1rem",
      }}
    >
      <div className="product-card">
        <div className="header-card">
          <img className="logo" src={logo} alt="logotip" />
          <span className="product-title">{data.brand}</span>
        </div>
        <div className="product-main">
          <img src={freeze} alt="freeze" />
        </div>
        <div className="product-footer">
          <div className="product-info">
            <p className="product-name">{data.name}</p>
            <em className="product-type">{data.use_for}</em>
          </div>
          <p className="product-price">{data.price}$</p>
        </div>
      </div>
    </Link>
  );
}

import "./Footer.scss";
import makler from "../../assets/img/svg/logo-white.svg";
import payme from "../../assets/img/svg/payme.svg";
import click from "../../assets/img/svg/payme.svg";
import upay from "../../assets/img/svg/upay.svg";
import spirite from "../../assets/img/symbol/sprite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__top-body">
            <a href="/">
              {" "}
              <img src={makler} alt="Makler" />
            </a>
            <ul>
              <li>
                {" "}
                <a href="#">Реклама дателям</a>
              </li>
              <li>
                {" "}
                <a href="#">Инструкции по публикации</a>
              </li>
              <li>
                {" "}
                <a href="#">Инструкции по публикации</a>
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <a href="#">Помощь</a>
              </li>
              <li>
                {" "}
                <a href="#">Тех поддержка </a>
              </li>
              <li>
                {" "}
                <a href="#">+998 90 123-45-67</a>
              </li>
              <li>
                {" "}
                <a href="#">1187</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__center">
        <div className="container">
          <div className="footer__center-body">
            <p>
              'Someday' is a disease that will take your dreams to the grave
              with you. Just do it and correct course along the way.
            </p>
            <ul>
              <li>
                {" "}
                <img src={payme} alt="payme" />
              </li>
              <li>
                {" "}
                <img src={click} alt="click" />
              </li>
              <li>
                {" "}
                <img src={upay} alt="upay" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-body">
            <ul>
              <li>
                <p>Copyright 2022 R</p>
              </li>
              <li>
                <a className="line-link" href="#">
                  Условия использование{" "}
                </a>
              </li>
              <li>
                <a className="line-link" href="#">
                  Политика конфеденциалности
                </a>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#">
                  <svg className="svg-sprite-icon icon-fb w-12">
                    <use href={`${spirite}#fb`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-sprite-icon icon-inst w-12">
                    <use href={`${spirite}#inst`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-sprite-icon icon-telegram w-12">
                    <use href={`${spirite}#telegram`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-sprite-icon icon-tw w-12">
                    <use href={`${spirite}#tw`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-sprite-icon icon-in w-12">
                    <use href={`${spirite}#in`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

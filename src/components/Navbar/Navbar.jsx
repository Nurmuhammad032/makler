import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="wrapper">
      <header className="header">
      <div className="container">
        <div className="header-body">
          <div className="header__left">
            <a href="/">
              <img src="img/logo_site2.png" alt="Makler" />
            </a>
            <ul className="breadcrumbs">
              <li>
                {" "}
                <a href="/">
                  <svg className="svg-sprite-icon icon-fi_arrow-left fill-n w-16 d-none">
                    <use  xlinkHref="img/symbol/sprite.svg#fi_arrow-left"></use>
                  </svg>
                  <svg className="svg-sprite-icon icon-fi_home fill-n w-16">
                    <use xlinkHref="img/symbol/sprite.svg#fi_home"></use>
                  </svg>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">Ремонт</a>
              </li>
              <li>
                {" "}
                <a href="#">Сантехник</a>
              </li>
              <li>
                {" "}
                <a href="#">Abduvali Eshonqulov </a>
              </li>
            </ul>
          </div>
          <div className="header-nav">
            <button className="hamburger hamburger--collapse" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <ul className="header-nav-list">
              <li>
                <a href="#">
                  <svg className="svg-sprite-icon icon-fi_globe w-16">
                    <use xlinkHref="img/symbol/sprite.svg#fi_globe"></use>
                  </svg>
                  <span>Русский </span>
                </a>
              </li>
              <li>
                {" "}
                <a href="/save-products.html">
                  <svg className="svg-sprite-icon icon-fi_heart w-16">
                    <use xlinkHref="img/symbol/sprite.svg#fi_heart"></use>
                  </svg>
                </a>
              </li>
              <li>
                {" "}
                <a href="/cabinet.html">
                  <svg className="svg-sprite-icon icon-fi_log-in w-16">
                    <use xlinkHref="img/symbol/sprite.svg#fi_log-in"></use>
                  </svg>
                  <span>Профиль </span>
                </a>
              </li>
              <li>
                {" "}
                <a href="/master2.html">
                  <svg className="svg-sprite-icon icon-fi_log-in w-16">
                    <use xlinkHref="img/symbol/sprite.svg#fi_log-in"></use>
                  </svg>
                  <span>Профиль 2 </span>
                </a>
              </li>
              <li>
                <a className="btn btn-orange-text" href="/create-product.html">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.333v9.334M3.333 8h9.333"
                      stroke="#C56622"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>разместить объявление</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar;

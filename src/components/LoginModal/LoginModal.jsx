import "./LoginModal.scss";
import sprite from "../../assets/img/symbol/sprite.svg";

const LoginModal = ({ close }) => {
  return (
    <div className="modal login-modal">
      <div className="modal-body">
        {" "}
        <span
          className="close-btn"
          href="#"
          onClick={() => close(false)}
          style={{
            cursor: "pointer",
          }}
        >
          <svg className="svg-sprite-icon icon-close">
            <use href={`${sprite}#close`}></use>
          </svg>
        </span>
        <h4>Войти или зарегистрироваться</h4>
        <p>
          Пожалуйста, введите номер телефона, который подтвердил вашу учетную
          запись!
        </p>
        <div className="alert-form">
          <img src="img/svg/30.svg" alt="30 days" />
          <p>
            Вы имеете право размещать бесплатные объявления в течение 30 дней
            после регистрации! Спасибо, что выбрали нас!
          </p>
        </div>
        <form action="#">
          <div className="form-input">
            <label>Номер телефона</label>
            <input type="text" id="telephone" name="telephone" value="+998" />
            <button className="btn btn-orange">
              Подтвердит номер телефона
            </button>
            <p>
              <a href="#">Войти другом способом!</a> |{" "}
              <a href="#">Нужна помощь?</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

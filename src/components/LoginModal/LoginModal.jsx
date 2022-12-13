import "./LoginModal.scss";
import sprite from "../../assets/img/symbol/sprite.svg";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { baseURL } from "../../requests/requests";
import { useContext, useState } from "react";
import ContextApp from "../../context/context";
import { toast } from "react-toastify";

const LoginModal = () => {
  const { loginModalFunc, getUserId } = useContext(ContextApp);
  const [da, setDa] = useState();
  const { form, changeHandler } = useForm({
    number: "",
  });

  const handeSubmit = (e) => {
    e.preventDefault();
    const info = {
      phone_number: form.number.toString(),
    };
    axios
      .post(`${baseURL}/authorization/signup/`, info)
      .then((data) => {
        localStorage.setItem("access", data?.data.token?.access);
        localStorage.setItem("userId", data.data?.token?.id);
        setDa(data);
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => {
        loginModalFunc(false);
        window.location.reload();
      });
  };

  return (
    <div className="modal login-modal">
      <div className="modal-body">
        {" "}
        <span
          className="close-btn"
          href="#"
          onClick={() => loginModalFunc(false)}
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
        <form onSubmit={handeSubmit}>
          <div className="form-input">
            <label>Номер телефона</label>
            <input
              type="text"
              id="telephone"
              name="number"
              onChange={changeHandler}
              value={form.number}
            />
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

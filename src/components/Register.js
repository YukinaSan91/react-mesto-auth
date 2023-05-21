import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ onRegister }) {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = formValue;
    onRegister(email, password);
  }

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__heading">Регистрация</h2>
        <form className="login__form" name="register" onSubmit={handleSubmit}>
          <input
            id="email"
            className="login__text"
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formValue.email || ""}
          />
          <span
            className="input-email-error login__text-input-error"
            type="text"
          ></span>
          <input
            id="password"
            className="login__text"
            name="password"
            type="password"
            placeholder="Пароль"
            required
            onChange={handleChange}
            value={formValue.password || ""}
          />
          <span
            className="input-password-error login__text-input-error"
            type="text"
          ></span>
          <div className="login__button-container">
            <button className="login__button" type="submit">
              Зарегистрироваться
            </button>
            <p className="login__send-text">
              Уже зарегистрированы?&nbsp;
              <Link to="/sign-in" className="login__send-link">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

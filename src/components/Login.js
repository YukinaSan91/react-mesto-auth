import React, { useState } from "react";

function Login({ onLogin }) {
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
    if (!formValue.email || !formValue.password) {
      return;
    }
    onLogin(formValue.email, formValue.password)
  }

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__heading">Вход</h2>
        <form className="login__form" name="login" onSubmit={handleSubmit}>
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
              Войти
            </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import { useState } from "react";

function AuthForm({title, name, buttonText, onSubmit, children}) {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__heading">{title}</h2>
        <form className="login__form" name={name} onSubmit={onSubmit}>
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
              {buttonText}
            </button>
            {children}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;

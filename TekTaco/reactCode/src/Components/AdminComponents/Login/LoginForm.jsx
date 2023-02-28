import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {};

  return (
    <div id="login-form">
      <form>
        <div class="username">
          <label id="username-label">
            Username
            <input id="username" type="textarea" required placeholder="admin" />
          </label>
        </div>
        <div class="password">
          <label id="password-label">
            Password
            <input
              id="password"
              type="password"
              required
              placeholder="password"
            />
          </label>
        </div>
        <button id="submit" type="submit">
          Login
        </button>
      </form>
      <a href="/home">back to home page</a>
    </div>
  );
}

export default LoginForm;

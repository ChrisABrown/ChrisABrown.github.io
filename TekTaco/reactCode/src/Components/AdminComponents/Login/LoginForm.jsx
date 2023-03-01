import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    console.log(data);
  };
  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password should be at-least 6 characters.";
    } else if (
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
    ) {
      return "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.";
    }
    return true;
  };

  return (
    <div id="login-form">
      <form onSubmit={handleSubmit(onLogin)}>
        <div className="username">
          <label id="username-label">Username</label>
          <input
            {...register("email", {
              required: "Username is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Username not valid",
              },
            })}
            placeholder="admin"
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
        />
        <div className="password">
          <label id="password-label">Password</label>
          <input
            {...register("password", {
              required: "Password is required.",
            })}
            placeholder="password"
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;

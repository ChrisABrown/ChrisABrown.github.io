import React from "react";

function LoginForm() {
  return (
    <div id="login-form">
      <form action="" method="post">
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

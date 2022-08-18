import React from "react";

import styles from "./Login.module.css";

/**
 * It's a functional component that renders a form with a text input and a button. The text input is
 * used to set the user's name, and the button is used to set the status to true
 */
const Login = ({ user, setUser, setStatus }) => {
  const nickName = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };
  const handleStatus = () => {
    setStatus(true);
  };

  return (
    <section className={styles.login}>
      <div>
        <h1>Welcome!</h1>
        <label htmlFor="user">Please type your name:</label>
        <input
          placeholder="Morty"
          maxLength={10}
          type="text"
          id="user"
          autoComplete="off"
          onChange={nickName}
        />
        <button onClick={handleStatus} disabled={user.length < 3}>
          Let's Go
        </button>
      </div>
    </section>
  );
};

export { Login };

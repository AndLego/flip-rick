import React from "react";

import styles from "./Login.module.css";

const Login = ({ setUser, setStatus }) => {
  const nickName = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };
  const handleStatus = () => {
    setStatus(true);
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleStatus}>
        <h1>Welcome!</h1>
        <label htmlFor="user">Please type your name:</label>
        <input type="text" id="user" autoComplete="off" onChange={nickName} />
        <button>Let's Go</button>
      </form>
    </div>
  );
};

export { Login };

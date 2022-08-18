import React from "react";

import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.logo}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
        alt="Logo"
      />
    </div>
  );
};

export { Header };

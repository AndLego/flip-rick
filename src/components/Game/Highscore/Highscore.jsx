import React from "react";
import ReactDOM from "react-dom";

import styles from "./Highscore.module.css";

const Highscore = ({ setShowTop }) => {
  return ReactDOM.createPortal(
    <section className={styles.highscore}>
      <button className={styles.close} onClick={() => setShowTop(false)}>X</button>
      <div className={styles.container}>
        
        <div>
          <h4>Andres</h4>
          <p>Turns: 23</p>
          <p>Time: 12:00</p>
        </div>
      </div>
      <button className={styles.reset} >Reset</button>
    </section>,
    document.getElementById("modal")
  );
};

export { Highscore };

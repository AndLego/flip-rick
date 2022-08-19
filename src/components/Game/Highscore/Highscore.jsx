import React from "react";
import ReactDOM from "react-dom";
// import { useUser } from "../../../hooks/useStorage";

import styles from "./Highscore.module.css";

const Highscore = ({ setShowTop, userScore }) => {
  // const { deleteScores } = useUser();

  //get Storage scores
  // let scores = JSON.parse(localStorage.getItem("TOP_SCORES"));
  console.log(userScore);

  const deleteScores = () => {
    localStorage.clear();
    console.log("scores eliminados");
  };

  return ReactDOM.createPortal(
    <section className={styles.highscore}>
      <button className={styles.close} onClick={() => setShowTop(false)}>
        X
      </button>
      <div className={styles.container}>
        {userScore === null ? (
          <div>Vacio</div>
        ) : (
          <>
            {userScore.map((score, id) => (
              <div key={id}>
                <h4>{score.user}</h4>
                <p>Turns: {score.turns}</p>
                <p>Time: {score.time}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <button onClick={deleteScores} className={styles.reset}>
        Reset
      </button>
    </section>,
    document.getElementById("modal")
  );
};

export { Highscore };

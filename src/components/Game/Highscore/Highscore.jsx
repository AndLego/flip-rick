import React from "react";
import ReactDOM from "react-dom";
// import { useUser } from "../../../hooks/useStorage";

import styles from "./Highscore.module.css";

const Highscore = ({ setShowTop, userScore, setUserScore }) => {
  const [confirmation, setConfirmation] = React.useState(false);

  const showConfirmation = () => {
    setConfirmation(true);
  };

  const deleteScores = () => {
    localStorage.setItem("TOP_SCORES", JSON.stringify([]));
    setUserScore([]);
    setConfirmation(false);
  };

  const cancelConfirmation = () => {
    setConfirmation(false);
  };

  return ReactDOM.createPortal(
    <section className={styles.highscore}>
      <button className={styles.close} onClick={() => setShowTop(false)}>
        X
      </button>
      <div className={styles.container}>
        <div className={styles.details}>
          <h4>Player</h4>
          <h4>Turns</h4>
          <h4>Time</h4>
        </div>
        {userScore === null ? (
          <div></div>
        ) : (
          <>
            {userScore
              .sort((a, b) => {
                return (
                  parseFloat(a.time.split(":").join(".")) -
                  parseFloat(b.time.split(":").join("."))
                );
              })
              .map((score, id) => (
                <div key={id} className={score.current ? styles.current : ""}>
                  <h4>{score.user}</h4>
                  <p>{score.turns}</p>
                  <p>{score.time}</p>
                </div>
              ))}
          </>
        )}
      </div>
      <button onClick={showConfirmation} className={styles.reset}>
        Reset Ranking
      </button>
      {confirmation && (
        <div className={styles.check}>
          <div>
            <p>Are you sure?</p>
            <div className={styles.btns}>
              <button onClick={deleteScores}>Yes</button>
              <button onClick={cancelConfirmation}>No</button>
            </div>
          </div>
        </div>
      )}
    </section>,
    document.getElementById("modal")
  );
};

export { Highscore };

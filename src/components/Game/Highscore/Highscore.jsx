import React from "react";
import ReactDOM from "react-dom";
// import { useUser } from "../../../hooks/useStorage";

import styles from "./Highscore.module.css";

const Highscore = ({ setShowTop, userScore, setUserScore }) => {
  // const [ranking, setRanking] = React.useState(false);

  // //set Ranking
  // React.useEffect(() => {
  //   userScore.sort((a, b) => {
  //     if (
  //       parseFloat(a.time.split(":").join(".")) >
  //       parseFloat(b.time.split(":").join("."))
  //     ) {
  //       return 1;
  //     }
  //     if (
  //       parseFloat(a.time.split(":").join(".")) <
  //       parseFloat(b.time.split(":").join("."))
  //     ) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // }, []);

  const deleteScores = () => {
    localStorage.setItem("TOP_SCORES", JSON.stringify([]));
    setUserScore([]);
    console.log("scores eliminados");
  };

  return ReactDOM.createPortal(
    <section className={styles.highscore}>
      <button className={styles.close} onClick={() => setShowTop(false)}>
        X
      </button>
      <div className={styles.container}>
        <div>
          <h4>Player</h4>
          <h4>Turns</h4>
          <h4>Time</h4>
        </div>
        {userScore === null ? (
          <div></div>
        ) : (
          <>
            {userScore.map((score, id) => (
              <div key={id}>
                <h4>{score.user}</h4>
                <p>{score.turns}</p>
                <p>{score.time}</p>
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

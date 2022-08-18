import React from "react";

import styles from "./Bar.module.css";

const Bar = ({ turns, newGame, setShowTop, seconds, minutes }) => {
  
  let formatSeconds = seconds < 10 ? "0" + seconds : seconds;
  let formatMinutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <div className={styles.bar}>
      <p>Turn: {turns}</p>
      <span>
        {formatMinutes}:{formatSeconds}
      </span>
      <button onClick={newGame}>New Game</button>
      <button onClick={() => setShowTop(true)}>HighScore</button>
    </div>
  );
};

export { Bar };

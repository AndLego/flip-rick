import React from "react";
import Timer from "../Timer/Timer";

import styles from "./Bar.module.css";

const Bar = ({
  turns,
  newGame,
  setShowTop,
  seconds,
  minutes,
  handleTimeIncrement,
  userScore,
}) => {
  const handleRanking = () => {
    userScore.map((score) => (score.current = false));
    setShowTop(true);
  };

  return (
    <div className={styles.bar}>
      <p>Turn: {turns}</p>
      <Timer
        handleTimeIncrement={handleTimeIncrement}
        seconds={seconds}
        minutes={minutes}
      />
      <button onClick={newGame}>New Game</button>
      <button onClick={handleRanking}>HighScore</button>
    </div>
  );
};

export { Bar };

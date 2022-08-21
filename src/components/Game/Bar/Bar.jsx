import React from "react";
import Timer from "../Timer/Timer";

import styles from "./Bar.module.css";

const Bar = ({
  turns,
  newGame,
  setShowTop,
  userScore,
}) => {
  const handleRanking = () => {
    userScore.map((score) => (score.current = false));
    setShowTop(true);
  };
  return (
    <div className={styles.bar}>
      <p>Turn: {turns}</p>
      <Timer />
      <button onClick={newGame}>New Game</button>
      <button onClick={handleRanking}>HighScore</button>
    </div>
  );
};

export { Bar };

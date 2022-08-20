import React from "react";

import styles from "./Winner.module.css";

const Winner = ({
  setShowTop,
  newGame,
  resetGame,
  user,
  currentTime,
  turns,
  saveScore,
}) => {
  //Set scores after finishing the game
  React.useEffect(() => {
    console.log("holi");
    saveScore(user, currentTime, turns);
  }, []);

  return (
    <section className={styles.winner}>
      <h1>YOU WIN!</h1>
      <div className={styles.container}>
        <div>
          <p>Time taken</p>
          <span>{currentTime}</span>
        </div>
        <div>
          <p>Turns</p>
          <span>{turns}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setShowTop(true)}>
          <span>See Highscores</span>
        </button>
        <button onClick={newGame}>
          <span>Play Again</span>
        </button>
        <button onClick={resetGame}>
          <span>New Player</span>
        </button>
      </div>
    </section>
  );
};

export { Winner };

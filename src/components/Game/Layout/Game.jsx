import React from "react";
import { useAPI } from "../../../hooks/useAPI";
import { useTimer } from "../../../hooks/useTimer";

import { Bar } from "../Bar/Bar";
import { Card } from "../Card/Card";

import styles from "./Game.module.css";

const Game = ({ setShowTop, setStatus, setUser }) => {
  const [turns, setTurns] = React.useState(0);
  const [cardA, setCardA] = React.useState(null);
  const [cardB, setCardB] = React.useState(null);
  const [disable, setDisabled] = React.useState(false);

  const { characters, setRecall, setCharacters } = useAPI();
  const {
    seconds,
    minutes,
    setSeconds,
    setMinutes,
    startTimer,
    start,
    setStart,
  } = useTimer();

  //Start New Game
  startTimer();

  const newGame = () => {
    setCardA(null);
    setCardB(null);
    setRecall(true);
    setTurns(0);
    setStart(false);
  };

  //Handle New Game Timer with newGame button
  React.useEffect(() => {
    setTimeout(() => {
      setSeconds(0);
      setMinutes(0);
      setStart(true);
    }, 10);
  }, [start]);

  //Handle Choices
  const handleChoice = (card) => {
    cardA ? setCardB(card) : setCardA(card);
  };

  //Matching cards
  React.useEffect(() => {
    if (cardA && cardB) {
      setDisabled(true);

      if (cardA.src === cardB.src) {
        setCharacters((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === cardA.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 700);
      }
    }
  }, [cardA, cardB]);

  //Reset Choices & increase turn
  const resetTurn = () => {
    setCardA(null);
    setCardB(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //reset character and game

  const resetGame = () => {
    setStatus(false);
    setUser("")
  };

  return (
    <>
      <Bar
        seconds={seconds}
        minutes={minutes}
        turns={turns}
        newGame={newGame}
        setShowTop={setShowTop}
      />
      <div className={styles.game}>
        <button onClick={resetGame} className={styles.goBack}>
          New Player
        </button>
        {characters.map((card, id) => (
          <Card
            key={id}
            image={card}
            handleChoice={handleChoice}
            flipped={card === cardA || card === cardB || card.matched}
            disabled={disable}
          />
        ))}
      </div>
    </>
  );
};

export { Game };

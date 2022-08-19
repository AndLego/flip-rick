import React from "react";
import { useAPI } from "../../../hooks/useAPI";
import { useTimer } from "../../../hooks/useTimer";

import { Bar } from "../Bar/Bar";
import { Card } from "../Card/Card";
import { Winner } from "../Winner/Winner";

import styles from "./Game.module.css";

const Game = ({ setShowTop, setStatus, setUser }) => {
  const [turns, setTurns] = React.useState(0);
  const [cardA, setCardA] = React.useState(null);
  const [cardB, setCardB] = React.useState(null);
  //disable button while checking the matching cards
  const [disable, setDisabled] = React.useState(false);
  //fix the bug that shows the next game after click on new game
  const [hide, setHide] = React.useState(true);
  //shows the winner data
  const [win, setWin] = React.useState(false);
  const [remainingFlips, setRemainingFlips] = React.useState(10);

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
  console.log(remainingFlips);
  //Start New Game
  startTimer();

  const newGame = () => {
    setCardA(null);
    setCardB(null);
    setRecall(true);
    setTurns(0);
    setHide(false);
    setStart(false);
    setRemainingFlips(10);
  };

  //Handle New Game Timer with newGame button
  React.useEffect(() => {
    setTimeout(() => {
      setSeconds(0);
      setMinutes(0);
      setStart(true);
      setHide(true);
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
              setRemainingFlips(remainingFlips - 1);
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

  // console.log(characters)
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
    setUser("");
  };

  return (
    <>
      {remainingFlips > 0 ? (
        <>
          <Bar
            seconds={seconds}
            minutes={minutes}
            turns={turns}
            newGame={newGame}
            setShowTop={setShowTop}
          />
          {hide && (
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
          )}
        </>
      ) : (
        <Winner
          setShowTop={setShowTop}
          newGame={newGame}
          resetGame={resetGame}
        />
      )}
    </>
  );
};

export { Game };

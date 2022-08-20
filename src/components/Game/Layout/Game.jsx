import React from "react";
import { useAPI } from "../../../hooks/useAPI";

import { Bar } from "../Bar/Bar";
import { Card } from "../Card/Card";
import { Winner } from "../Winner/Winner";

import styles from "./Game.module.css";

const Game = ({ setShowTop, setStatus, setUser, user, saveScore }) => {
  const [turns, setTurns] = React.useState(0);
  const [cardA, setCardA] = React.useState(null);
  const [cardB, setCardB] = React.useState(null);

  //disable button while checking the matching cards
  const [disable, setDisabled] = React.useState(false);

  //fix the bug that shows the next game after click on new game
  const [hide, setHide] = React.useState(true);

  //win condition
  const [remainingFlips, setRemainingFlips] = React.useState(10);

  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  const { characters, setRecall, setCharacters } = useAPI();

  //NEW GAME
  const newGame = () => {
    setCardA(null);
    setCardB(null);
    setRecall(true);
    setTurns(0);
    setHide(false);
    setRemainingFlips(10);
    setSeconds(0);
    setMinutes(0);
  };

  //Bug Fix -- card showing before new game
  React.useEffect(() => {
    setTimeout(() => {
      setHide(true);
      //podemos poner un loading
    }, 100);
  }, [hide]);

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

  //Timer
  const handleTimeIncrement = () => {
    setSeconds((prevState) => prevState + 1);
  };

  React.useEffect(() => {
    if (seconds == 60) {
      setSeconds(0);
      setMinutes((prevState) => prevState + 1);
    }
  }, [seconds]);

  //current time
  let currentTime = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

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
            handleTimeIncrement={handleTimeIncrement}
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
          user={user}
          currentTime={currentTime}
          turns={turns}
          saveScore={saveScore}
        />
      )}
    </>
  );
};

export { Game };

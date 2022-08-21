import React from "react";
import { TimeContext } from "../../../context/TimeContext";
import { useAPI } from "../../../hooks/useAPI";

import { Loader } from "../../Loader/Loader";
import { Bar } from "../Bar/Bar";
import { Card } from "../Card/Card";
import { Winner } from "../Winner/Winner";

import styles from "./Game.module.css";

const Game = ({
  setShowTop,
  setStatus,
  setUser,
  user,
  saveScore,
  userScore,
}) => {
  const [turns, setTurns] = React.useState(0);
  const [cardA, setCardA] = React.useState(null);
  const [cardB, setCardB] = React.useState(null);

  //disable button while checking the matching cards
  const [disable, setDisabled] = React.useState(false);

  //fix the bug that shows the next game after click on new game
  const [hide, setHide] = React.useState(true);

  //win condition
  const [remainingFlips, setRemainingFlips] = React.useState(10);

  const { characters, setRecall, setCharacters, loading } = useAPI();
  const { setSeconds, setMinutes } = React.useContext(TimeContext);

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

      if (cardA.src === cardB.src && cardA.id !== cardB.id) {
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

  if (loading) return <Loader />;

  return (
    <>
      {remainingFlips > 0 ? (
        <>
          <Bar
            turns={turns}
            newGame={newGame}
            setShowTop={setShowTop}
            userScore={userScore}
          />
          {hide && (
            <div className={styles.game}>
              <button onClick={resetGame} className={styles.goBack}>
                New Player
              </button>
              {characters.map((card, id) => (
                <Card
                  key={id}
                  card={card}
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
          turns={turns}
          saveScore={saveScore}
          userScore={userScore}
        />
      )}
    </>
  );
};

export { Game };

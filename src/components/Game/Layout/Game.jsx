import React from "react";
import { useAPI } from "../../../hooks/useAPI";

import { Card } from "../Card/Card";

import styles from "./Game.module.css";

const Game = () => {
  const [turns, setTurns] = React.useState(0);
  const [cardA, setCardA] = React.useState(null);
  const [cardB, setCardB] = React.useState(null);

  const { characters, setRecall, setCharacters } = useAPI();

  //Start New Game
  const newGame = () => {
    setRecall(true);
    setTurns(0);
  };

  //Handle Choices
  const handleChoice = (card) => {
    cardA ? setCardB(card) : setCardA(card);
  };

  //Matching cards
  React.useEffect(() => {
    if (cardA && cardB) {
      if (cardA === cardB) {
        setCharacters((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === cardA) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [cardA, cardB]);

  console.log(cardA, cardB);

  //Reset Choices & increase turn
  const resetTurn = () => {
    setCardA(null);
    setCardB(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  //Flip validator
  // const letsFlip = (card) =>{
  //   if(card.src === cardA || card.src === cardB || ){
  //     return true
  //   }
  // }

  return (
    <>
      <div className={styles.game}>
        {characters.map((card, id) => (
          <Card
            key={id}
            image={card}
            handleChoice={handleChoice}
            flipped={card.matched}
          />
        ))}
      </div>
      <button onClick={newGame}>New Game</button>
    </>
  );
};

export { Game };

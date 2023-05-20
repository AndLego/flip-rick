import React from "react";

import styles from "./Card.module.css";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img className={styles.front} src={card.src} alt="Card Front" />
        <img
          onClick={handleClick}
          className={styles.back}
          src="https://b.thumbs.redditmedia.com/ib7Q6tWVRhrB4ON1jb08EYyMRURjjZhHvQbfSjEZzQw.png"
          alt="front pic"
        />
      </div>
    </div>
  );
};

export { Card };

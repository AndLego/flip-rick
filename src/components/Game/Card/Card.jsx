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
          src="https://vsthemes.org/uploads/akamai/cp920s1/28/7c28bdd0fd01c041de1eabde27bb200d.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export { Card };

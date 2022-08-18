import React from "react";

import styles from "./Card.module.css";

const Card = ({ image, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(image.src);
  };
console.log(flipped)
  return (
    <div className={styles.card}>
      <div
        className={flipped ? `${styles.inner} ${styles.flip}` : styles.inner}
      >
        <div className={styles.front}>
          <img
            onClick={handleClick}
            src="https://vsthemes.org/uploads/akamai/cp920s1/28/7c28bdd0fd01c041de1eabde27bb200d.webp"
            alt="Card Front"
          />
        </div>
        <div  className={styles.back}>
          <img src={image.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export { Card };

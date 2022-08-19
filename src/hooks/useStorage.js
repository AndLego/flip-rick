import React from "react";

const useScores = (itemName, initialValue) => {
  const [userScore, setUserScore] = React.useState(initialValue);

  /* 1. It is checking if the localStorage has the itemName
    2. If it does not have the itemName, it will set the itemName to the initialValue
    3. If it does have the itemName, it will set the parsedItem to the itemName
    4. It will set the user to the parsedItem */
  React.useEffect(() => {
    const userItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorage) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(userItem);
    }
    setUserScore(parsedItem);
  }, []);

  /**
   * It takes a newUser object, stringifies it, and then saves it to localStorage
   * @param newUser - This is the new user object that we want to save to localStorage.
   */
  const createUser = (newUser) => {
    const stringifiedItem = JSON.stringify(newUser);
    localStorage.setItem(itemName, stringifiedItem);
    setUserScore(newUser);
  };

  return { userScore, createUser };
};

//ARREGLAR ESTEO

const setHighScore = () => {
  const { userScore, createUser } = useScores("TOP_SCORES", []);

  const addScore = (name, time, turns) => {
    const scores = [...userScore];
    scores.push({
      user: name,
      time: time,
      turns: turns,
    });
    createUser(scores);
  };

  return { addScore, userScore };
};

export { setHighScore };

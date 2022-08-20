import React from "react";

import { Login } from "./components/Login/Login";
import { Game } from "./components/Game/Layout/Game";
import { Highscore } from "./components/Game/Highscore/Highscore";

import "./App.css";

const App = () => {
  const [user, setUser] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);

  const [userScore, setUserScore] = React.useState([]);

  React.useEffect(() => {
    const userItem = localStorage.getItem("TOP_SCORES");
    let parsedItem;
  
    if (!localStorage) {
      localStorage.setItem("TOP_SCORES", JSON.stringify([]));
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(userItem);
    }
    setUserScore(parsedItem);
  }, []);
  
  const saveScore = (name, time, turns) => {
    const scores = [...userScore];
      scores.push({
        user: name,
        time: time,
        turns: turns,
      });
  
    const stringifiedItem = JSON.stringify(scores);
    localStorage.setItem("TOP_SCORES", stringifiedItem);
    setUserScore(scores);
  };

  return (
    <>
      {!status && <Login user={user} setUser={setUser} setStatus={setStatus} />}
      {status && (
        <Game
          setShowTop={setShowTop}
          setStatus={setStatus}
          setUser={setUser}
          user={user}
          saveScore={saveScore}
        />
      )}
      {showTop && <Highscore setShowTop={setShowTop} userScore={userScore} />}
    </>
  );
};

export { App };

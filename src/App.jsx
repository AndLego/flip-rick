import React from "react";

import { Login } from "./components/Login/Login";
import { Game } from "./components/Game/Layout/Game";
import { Highscore } from "./components/Game/Highscore/Highscore";

import { TimeProvider } from "./context/TimeContext";

import "./App.css";

const App = () => {
  const [user, setUser] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);

  const [userScore, setUserScore] = React.useState([]);

  React.useEffect(() => {
    const userItem = localStorage.getItem("TOP_SCORES");
    let parsedItem;

    if (!localStorage === false) {
      localStorage.setItem(
        "TOP_SCORES",
        JSON.stringify([{ user: null, time: null, turns: null }])
      );
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(userItem);
    }
    setUserScore(parsedItem);
  }, []);

  const saveScore = (name, time, turns, current) => {
    const scores = [...userScore];
    scores.push({
      user: name,
      time: time,
      turns: turns,
      current: current,
    });

    const stringifiedItem = JSON.stringify(scores);
    localStorage.setItem("TOP_SCORES", stringifiedItem);
    setUserScore(scores);
  };

  return (
    <>
      <TimeProvider>
        {!status && (
          <Login user={user} setUser={setUser} setStatus={setStatus} />
        )}
        {status && (
          <Game
            setShowTop={setShowTop}
            setStatus={setStatus}
            setUser={setUser}
            user={user}
            saveScore={saveScore}
            userScore={userScore}
          />
        )}
        {showTop && (
          <Highscore
            setShowTop={setShowTop}
            userScore={userScore}
            setUserScore={setUserScore}
          />
        )}
      </TimeProvider>
    </>
  );
};

export { App };

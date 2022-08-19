import React from "react";
import { setHighScore } from "./hooks/useStorage";

import { Login } from "./components/Login/Login";
import { Game } from "./components/Game/Layout/Game";
import { Highscore } from "./components/Game/Highscore/Highscore";

import "./App.css";

const App = () => {
  const [user, setUser] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);

  const { addScore, userScore } = setHighScore();

  console.log(user);

  return (
    <>
      {!status && <Login user={user} setUser={setUser} setStatus={setStatus} />}
      {status && (
        <Game
          setShowTop={setShowTop}
          setStatus={setStatus}
          setUser={setUser}
          user={user}
          addScore={addScore}
        />
      )}
      {showTop && <Highscore setShowTop={setShowTop} userScore={userScore} />}
    </>
  );
};

export { App };

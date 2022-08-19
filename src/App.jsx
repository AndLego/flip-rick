import React from "react";

import { Login } from "./components/Login/Login";
import { Game } from "./components/Game/Layout/Game";
import { Card } from "./components/Game/Card/Card";
import { Highscore } from "./components/Game/Highscore/Highscore";

import "./App.css";

const App = () => {
  const [user, setUser] = React.useState("");
  const [status, setStatus] = React.useState(true);
  const [showTop, setShowTop] = React.useState(false);
  console.log(user);
  
  return (
    <>
      {!status && <Login user={user} setUser={setUser} setStatus={setStatus} />}
      {status && (
        <Game setShowTop={setShowTop} setStatus={setStatus} setUser={setUser} />
      )}
      {showTop && <Highscore setShowTop={setShowTop} />}
    </>
  );
};

export { App };

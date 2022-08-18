import React from "react";
import { useAPI } from "./hooks/useAPI";

import { Login } from "./components/Login/Login";
import { Game } from "./components/Game/Layout/Game";
import { Card } from "./components/Game/Card/Card";

import "./App.css";

const App = () => {
  const [user, setUser] = React.useState("");
  const [status, setStatus] = React.useState(false);



  return (
    <>
      {/* {!status && <Login setUser={setUser} setStatus={setStatus} />} */}
      {/* {status && <Game pjs={pjs} render={(item) => <Card text={item} />} />} */}
      <Game />
    </>
  );
};

export { App };

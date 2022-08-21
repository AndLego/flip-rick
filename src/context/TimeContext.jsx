import React from "react";

const TimeContext = React.createContext();

const TimeProvider = (props) => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [gameRunning, setGameRunning] = React.useState(false);

  //Timer
  const handleTimeIncrement = () => {
    setSeconds((prevState) => prevState + 1);
  };

  React.useEffect(() => {
    if (seconds == 60) {
      setSeconds(0);
      setMinutes((prevState) => prevState + 1);
    }
  }, [seconds]);

  //Format timer
  let formatSeconds = seconds < 10 ? "0" + seconds : seconds;
  let formatMinutes = minutes < 10 ? "0" + minutes : minutes;

  React.useEffect(() => {
    setCurrentTime(`${formatMinutes}:${formatSeconds}`);
  }, [seconds]);

  return (
    <TimeContext.Provider
      value={{
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        currentTime,
        setCurrentTime,
        handleTimeIncrement,
        formatSeconds,
        formatMinutes,
      }}
    >
      {props.children}
    </TimeContext.Provider>
  );
};

export { TimeContext, TimeProvider };

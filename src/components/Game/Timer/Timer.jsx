import React from "react";

const Timer = ({ start }) => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  let currentInterval;
  console.log(start);
  //Timer
  const startTimer = () => {
    React.useEffect(() => {
      currentInterval = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }, []);

    React.useEffect(() => {
      if (seconds == 60) {
        setSeconds(0);
        setMinutes((prevState) => prevState + 1);
      }
    }, [seconds]);
  };
  if (start) {
    startTimer();
  }
  console.log(seconds);

  let formatSeconds = seconds < 10 ? "0" + seconds : seconds;
  let formatMinutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <span>
      {formatMinutes}:{formatSeconds}
    </span>
  );
};

export default Timer;

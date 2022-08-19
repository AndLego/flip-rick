import React from "react";

const useTimer = () => {
  const [start, setStart] = React.useState(true);
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  let currentInterval;
  //Start Timer

  const startTimer = () => {
    React.useEffect(() => {
      if (start) {
        currentInterval = setInterval(() => {
          setSeconds((prevState) => prevState + 1);
        }, 1000);
      }
      return () => clearInterval(currentInterval);
    }, [start]);

    React.useEffect(() => {
      if (seconds == 60) {
        setSeconds(0);
        setMinutes((prevState) => prevState + 1);
      }
    }, [seconds]);
  };

  return {
    seconds,
    minutes,
    setSeconds,
    setMinutes,
    setStart,
    start,
    startTimer,
  };
};

export { useTimer };

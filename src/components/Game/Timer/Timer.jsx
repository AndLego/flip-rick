import React from "react";

const Timer = ({ handleTimeIncrement, seconds, minutes }) => {
  React.useEffect(() => {
    const currentInterval = setInterval(() => {
      handleTimeIncrement();
    }, 1000);

    return () => clearInterval(currentInterval);
  }, []);

  let formatSeconds = seconds < 10 ? "0" + seconds : seconds;
  let formatMinutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <span>
      {formatMinutes}:{formatSeconds}
    </span>
  );
};

export default Timer;

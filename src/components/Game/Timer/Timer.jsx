import React from "react";
import { TimeContext } from "../../../context/TimeContext";

const Timer = () => {
  const { handleTimeIncrement, formatSeconds, formatMinutes } =
    React.useContext(TimeContext);

  React.useEffect(() => {
    const currentInterval = setInterval(() => {
      handleTimeIncrement();
    }, 1000);

    return () => {
      clearInterval(currentInterval);
    };
  }, []);

  return (
    <span>
      {formatMinutes}:{formatSeconds}
    </span>
  );
};

export default Timer;

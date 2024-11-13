import { useEffect } from "react";
import { useQuiz } from "../context/QuizProvider";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const tick = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(tick);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;

import { useQuiz } from "../context/QuizProvider";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? question.correctOption === index
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => {
            dispatch({ type: "answer", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

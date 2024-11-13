import { useQuiz } from "../context/QuizProvider";

function NextQuestion() {
  const { index, numQuestions, dispatch, answer } = useQuiz();

  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finished
    </button>
  );
}

export default NextQuestion;

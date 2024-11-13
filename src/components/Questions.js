import { useQuiz } from "../context/QuizProvider";
import Options from "./Options";

function Questions() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Questions;

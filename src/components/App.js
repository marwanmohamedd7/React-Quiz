import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../context/QuizProvider";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "Loading" && <Loader />}
        {status === "Ready" && <StartScreen />}
        {status === "Active" && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <NextQuestion />
              <Timer />
            </Footer>
          </>
        )}
        {status === "Finished" && <FinishScreen />}
        {status === "Error" && <Error />}
      </Main>
    </div>
  );
}

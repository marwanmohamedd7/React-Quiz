function Progress({ index, answer, points, numQuestions, maxPossiblePoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;

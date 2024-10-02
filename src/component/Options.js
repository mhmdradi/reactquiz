// import { type } from "@testing-library/user-event/dist/type";

export default function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer && index === question.correctOption ? "correct" : ""
          } ${
            hasAnswer && index !== question.correctOption && index === answer
              ? "wrong"
              : ""
          }`}
          disabled={hasAnswer}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

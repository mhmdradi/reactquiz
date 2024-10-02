// export default function Progress({
//   index,
//   numQuestions,
//   points,
//   maxPossiblePoints,
//   answer,
// }) {
//   return (
//     <header className="progress">
//       <progress max={numQuestions} value={index + Number(answer !== null)} />
//       <p>
//         Question <strong>{index + 1}</strong> / {numQuestions}
//       </p>
//       <p>
//         <strong>
//           {points} / {maxPossiblePoints}
//         </strong>
//       </p>
//     </header>
//   );
// }
export default function Progress({
  index: currentQuestionIndex,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={currentQuestionIndex + (answer !== null ? 1 : 0)}
      />
      <p>
        Question <strong>{currentQuestionIndex + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

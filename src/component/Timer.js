// // import { useEffect } from "react";

// // export default function Timer({ dispatch, secondRemaining }) {
// //   const mins = Math.floor(secondRemaining / 60);
// //   const seconds = secondRemaining % 60;
// //   useEffect(
// //     function () {
// //       const id = setInterval(function () {
// //         dispatch({ type: "tick" });
// //       }, 1000);
// //       return () => clearInterval(id);
// //     },
// //     [dispatch]
// //   );
// //   return (
// //     <div className="timer">
// //       {mins < 10 && "0"}
// //       {mins}:{seconds < 10 && "0"}
// //       {seconds}
// //     </div>
// //   );
// // }
// import { useEffect } from "react";

// export default function Timer({ dispatch, secondsRemaining }) {
//   const mins = Math.floor(secondsRemaining / 60);
//   const seconds = secondsRemaining % 60;

//   useEffect(() => {
//     const id = setInterval(() => {
//       dispatch({ type: "tick" });
//     }, 1000);

//     return () => clearInterval(id);
//   }, [dispatch]);

//   return (
//     <div className="timer">
//       {mins < 10 ? `0${mins}` : mins}:{seconds < 10 ? `0${seconds}` : seconds}
//     </div>
//   );
// }
import { useEffect, useReducer } from "react";

const initialState = { secondsRemaining: 480 };

function reducer(state, action) {
  switch (action.type) {
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function Timer() {
  const [{ secondsRemaining }, dispatch] = useReducer(reducer, initialState);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    if (secondsRemaining > 0) {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    }
  }, [secondsRemaining]);

  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

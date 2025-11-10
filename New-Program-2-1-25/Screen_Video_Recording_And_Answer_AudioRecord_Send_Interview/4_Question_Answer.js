/* Quwestion:-
Review this example of a React application using Redux for state management:
*/
/*
import React from "react";
import { connect } from "react-redux";
const Counter = ({ count, increment }) => (
  <div>
    <h1>{count}</h1> <button onClick={increment}>Increment</button>
  </div>
);
const mapStateToProps = (state) => ({ count: state.counter.value });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/

/* 
Analyze the use of Redux in this application and suggest enhancements to improve 
efficiency and maintainability, while considering the latest Redux Toolkit best practices.
*/

// Answer :-
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice"; // Redux Toolkit slice action

const Counter = () => {
  // Get counter value from Redux store
  const count = useSelector((state) => state.counter.value);

  // Get dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;

/* 
Enhancements made:
1. Replaced connect() with useSelector and useDispatch hooks for cleaner code.
2. Used Redux Toolkit action creator (increment()) instead of manual dispatch with type string.
3. Removed mapStateToProps and mapDispatchToProps to reduce boilerplate and improve maintainability.
*/

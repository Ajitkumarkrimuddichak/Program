/* Question :- Consider the following React component that fails to handle state 
updates correctly
*/
/*
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
  return (
    <div>
      <p>{count}</p> <button onClick={increaseCount}>Increase</button>{" "}
    </div>
  );
}
*/

/* 
Explain the issue this component has with state updates and describe how you would 
rectify it effectively. 
*/

// Answer :-
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // ✅ Use functional updates to ensure latest state is used
    setCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      setCount((prevCount) => prevCount + 1); // ✅ safely increments current state
    }, 1000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

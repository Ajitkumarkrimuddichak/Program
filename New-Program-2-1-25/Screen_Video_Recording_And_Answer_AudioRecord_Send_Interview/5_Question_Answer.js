/* Question :- A Node.js application is designed to handle scheduled tasks using timers. 
Review the implementation and discuss any improvements: 
*/

/*
setInterval(() => {
  console.log("Task executed at interval");
}, 5000);
setTimeout(() => {
  console.log("One-time delayed execution");
}, 3000);
*/

/* 
What are the possible issues with this implementation regarding long-term use, and 
how would you address them?
*/

// Answer :-
// Flag to prevent overlapping executions
let isIntervalRunning = false;
setInterval(() => {
  if (isIntervalRunning) return; // Skip if previous execution still running
  isIntervalRunning = true;

  try {
    console.log("Task executed at interval");
    // Place any long-running or async task here safely
  } catch (error) {
    console.error("Error during interval task:", error);
  } finally {
    isIntervalRunning = false;
  }
}, 5000);

// Wrap one-time task in try/catch
setTimeout(() => {
  try {
    console.log("One-time delayed execution");
    // Place one-time task logic here
  } catch (error) {
    console.error("Error during one-time task:", error);
  }
}, 3000);

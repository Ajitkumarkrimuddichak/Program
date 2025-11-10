/*Question :- Examine the following Express.js code for handling user registration. 
Please identify any missing error handling and suggest improvements for managing potential 
database failures. Explain your approach to ensuring robust error handling. 
*/

/*
import express from "express";
import bodyParser from "body-parser";
import { registerUser } from "./userService.js";
const app = express();
app.use(bodyParser.json());
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const result = await registerUser(username, password);
  res.status(201).send({ success: true, userId: result.id });
});
app.listen(3000, () => console.log("Server running on port 3000"));
*/

/*
What potential issues might arise from this registration endpoint, 
and how would you address them?
*/

// Answer :-
import express from "express";
import bodyParser from "body-parser";
import { registerUser } from "./userService.js";

const app = express();
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // ✅ Step 1: Input validation
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    // ✅ Step 2: Try to register user
    const result = await registerUser(username, password);

    // ✅ Step 3: Successful response
    res.status(201).json({
      success: true,
      userId: result.id,
    });
  } catch (error) {
    console.error("Error during registration:", error);

    // ✅ Step 4: Database or logical error handling
    if (error.code === 11000) {
      // Example: MongoDB duplicate key error
      return res.status(409).json({
        success: false,
        message: "Username already exists.",
      });
    }

    // ✅ Step 5: Generic error handler
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

/*
| Problem                   | Fix                                                  | Why it’s Important                     |
| ------------------------- | ---------------------------------------------------- | -------------------------------------- |
| Missing field validation  | Checked for `username` and `password` before DB call | Prevents bad data from being processed |
| Unhandled async errors    | Added `try...catch`                                  | Prevents crashes on DB or logic errors |
| Duplicate username issue  | Handled specific DB error (`error.code === 11000`)   | Gives user clear feedback              |
| No fallback error message | Added `res.status(500)` for unexpected errors        | Keeps app stable and user informed     |
*/

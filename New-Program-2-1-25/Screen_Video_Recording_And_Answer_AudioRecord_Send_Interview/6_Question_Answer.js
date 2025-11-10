/* Questioin :- This Express.js route handles user login by verifying credentials. 
Scrutinize the code for logical problems that may arise. Highlight any issues and 
propose an improvement to fix them. 
*/
/*
import express from "express";
const app = express();
app.use(express.json());
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Username and password are required");
  }
  const user = validateCredentials(username, password);
  if (!user) {
    res.status(401).send("Invalid credentials");
  }
  res
    .status(200)
    .json({ message: "Login successful", token: generateToken(user) });
});
app.listen(3000, () => console.log("Server running on port 3000"));
*/

/*
Identify and correct logical errors in this login route to 
ensure robust user authentication. 
*/

// Answer :-
import express from "express";
const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Step 1: Validate input
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  try {
    // Step 2: Validate credentials (assume async DB check)
    const user = await validateCredentials(username, password);
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    // Step 3: Generate token and respond
    const token = generateToken(user);
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

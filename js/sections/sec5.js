const express = require("express");
const app = express();

const { users } = require("./Data/Data.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).send("Empty Data");
    }
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).send("Missing required fields");
    }
    res.status(201).json({
      message: "Data submitted",
      user: { name, email, age },
    });
  } catch (error) {
    console.error("Error in /login:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
});

app.post("/api/postman/user", (req, res) => {
  const { name, email, age } = req.body;

  if (!name) {
    return res.status(400).json({ message: "data not submitted" });
  }
  const newUser = {
    id: users.length + 1,
    name,
    email,
    age,
  };

  users.push(newUser);
  res.status(201).json({ message: "data submitted", users });
});

app.get("/api/users", (req, res) => {
  res.status(200).json({ sucess: true, data: data.users }).end();
});

app.listen(5000, () => {});

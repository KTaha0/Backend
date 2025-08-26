const express = require("express");
const users = require("./routes/users");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", users);

app.get("/", (req, res) => {
  res.status(200).send("hello!").end();
});
app.listen(5000, () => {
  console.log("Server running on port 5000...");
});

const express = require("express");
const router = express.Router();

const { users } = require("../Data/Data.js");
const { getUsers } = require("../controllers/users.js");

router.get("/", getUsers);

router.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  let person = users.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ message: "No user found!" });
  }

  person.name = name;
  res.status(200).json({ person });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const personIndex = users.findIndex((person) => person.id === Number(id));

  if (personIndex === -1) {
    return res.status(404).json({ message: "No user found!" });
  }

  users.splice(personIndex, 1);
  res.status(200).send("User deleted successfully");
});
module.exports = router;

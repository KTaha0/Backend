const { users } = require("../Data/Data.js");
const getUsers = (req, res) => {
  const { search, limit } = req.query;
  let filteredUsers = [...users];

  if (search) {
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (limit) {
    filteredUsers = filteredUsers.slice(0, Number(limit));
  }

  res.status(200).json(filteredUsers);
};

module.exports = { getUsers };

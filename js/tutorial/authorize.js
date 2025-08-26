const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "jhon") {
    res.status(301).send(`Hello ${user}`).end();
    next();
  } else {
    res.status(401).send(" User Not Found").end();
  }
};

module.exports = authorize;

// req ==> middlware ==> res
// const authorize = require("./authorize");
// const logger = require("./logger");
// app.use([logger, authorize]);
// the order matters if it's after the home ('/'), it wouldn't excute for home page
// and if path added, it would be applied for anything after this path. ex => /api/...
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("about");
});

app.use((req, res) => {
  res.status(404).send("Page was not Found!");
});

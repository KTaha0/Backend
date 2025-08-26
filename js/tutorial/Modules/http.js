const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to our home page!");
  } else if (req.url === '/about') {
    res.end("this is the about page!");
  } else {
    res.end("oh no! sorry we cant load this page!");
  }
});

server.listen(5000);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("server created succsufuly!")
//   res.end("Hello, World!");
// });

// server.listen(5000, () => {
//   console.log("server is listining on port number 5000");
// });

const http = require("http");

const { readFileSync } = require("fs");
const home = readFileSync("/root/code/Frontend/Home/index.html");
const homeStyles = readFileSync("/root/code/Frontend/Home/style.css");
const homeScript = readFileSync("/root/code/Frontend/Home/script.js");

http
  .createServer(function (req, res) {
    const url = req.url;
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(home);
      res.end();
    } else if (url === "/style.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
      res.end();
    } else if (url === "/script.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeScript);
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1> The page is not found </h1>");
      res.end();
    }
  })
  .listen(5000);

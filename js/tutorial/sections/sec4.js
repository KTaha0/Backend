const express = require("express");
const app = express();

const { products } = require("./Data/products.js");
// const path = require("path");

// app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./Frontend/Home/index.html"));
//  we can dump the index.html file in the public folder
//  or  SSR
// });

app.get("/", (req, res) => {
  res.status(200).send('<h1>Home Page</h1> <a href="/products">products</a>');
});

app.get("/products/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedSearch = [...products];
  if (search) {
    sortedSearch = sortedSearch.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedSearch = sortedSearch.slice(0, Number(limit));
  }
  if (search.length < 1) {
    res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).send(sortedSearch).end();
});

app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  const selectedProducted = products.find(
    (product) => product.id === Number(productID)
  );
  if (!selectedProducted) {
    return res.status(404).send("<h1>Product does not exist!</h1>");
  }
  res.status(200).json(selectedProducted);
});

app.use((req, res) => {
  res.status(404).send("Page is not found!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

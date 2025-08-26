const users = [
  { id: 1, name: "Khaled Fathy", email: "khaled@example.com", age: 22 },
  { id: 2, name: "Sara Ali", email: "sara@example.com", age: 25 },
  { id: 3, name: "Omar Mostafa", email: "omar@example.com", age: 28 },
  { id: 4, name: "Mona Adel", email: "mona@example.com", age: 21 },
];

const products = [
  { id: 101, name: "Laptop", price: 1500, inStock: true },
  { id: 102, name: "Headphones", price: 200, inStock: true },
  { id: 103, name: "Keyboard", price: 100, inStock: false },
  { id: 104, name: "Mouse", price: 50, inStock: true },
];

const orders = [
  { orderId: "ORD001", userId: 1, productId: 101, quantity: 1 },
  { orderId: "ORD002", userId: 2, productId: 104, quantity: 2 },
  { orderId: "ORD003", userId: 3, productId: 102, quantity: 1 },
];

module.exports = { users, products, orders };

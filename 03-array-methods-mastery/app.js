const products = [
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Shirt", price: 20, category: "Clothing" },
  { name: "Laptop", price: 1000, category: "Electronics" },
];

const electronicsProducts = products.filter(
  (item) => item.category === "Electronics",
);

const electronicsPrice = electronicsProducts.map((item) => item.price);

const electronicsTotalPrice = electronicsPrice.reduce(
  (acc, currVal) => acc + currVal,
  0,
);

console.log(electronicsProducts);
console.log(electronicsPrice);
console.log(electronicsTotalPrice);

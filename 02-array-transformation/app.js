const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 },
];

const taxAppliedAmount = items.map((item) => ({
  ...item,
  price: item.price + item.price * 0.2,
}));

const cheapPrice = items.filter((item) => item.price < 150);

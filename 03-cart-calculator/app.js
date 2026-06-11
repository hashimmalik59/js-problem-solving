const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 },
];

const expensinvePrice = cart
  .filter((item) => item.price > 100)
  .reduce((acc, currVal) => {
    return acc + currVal.price;
  }, 0);
// console.log(expensinvePrice);

const users = [
  { name: "Ali", tasks: [1, 2, 3] },
  { name: "Sara" },
  { name: "Ahmed", tasks: [6, 7, 8, 9] },
];

const taskCount = users.reduce((acc, currVal) => {
  return acc + (currVal.tasks?.length || 0);
}, 0);

console.log(taskCount);

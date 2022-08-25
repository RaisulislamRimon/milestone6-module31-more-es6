const numbers = [2, 4, 6, 8, 10];
const half = numbers.map((x) => x / 2);
const thirds = numbers.map((x) => x / 3);
// console.log(half);
// console.log(thirds);

const friends = [
  "tom hanks",
  "cruise tom ",
  "tommy lee",
  "tom brady",
  "tom solaitom",
];
const firstLetters = friends.map((x) => x[0]);
// console.log(firstLetters);

const nameLength = friends.map((x) => x.length);
// console.log(nameLength);

const products = [
  { id: 1, name: "banana", price: 45000 },
  { id: 2, name: "orange", price: 35000 },
  { id: 3, name: "apple", price: 25000 },
  { id: 4, name: "watermelon", price: 45000 },
];
// const productNames = products.map((x) => x.name);
// console.log(productNames);
// const productNames = products.map((x) => console.log(x.name.toUpperCase()));
// const productNames = products.map((x) => console.log(x.name));
// const prices = products.map((x) => console.log(x.price));
// const prices = products.map((x) => x.price);
// console.log(prices);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bigNums = numbers.filter((x) => x > 5);
const tiny = numbers.filter((x) => x < 5);
const even = numbers.filter((x) => x % 2 === 0);
const products = [
  { id: 1, name: "banana", price: 45000 },
  { id: 2, name: "orange", price: 35000 },
  { id: 3, name: "apple", price: 25000 },
  { id: 4, name: "watermelon", price: 45000 },
];
const expensive = products.filter((x) => x.price > 35000);
console.log(bigNums);
console.log(tiny);
console.log(even);
console.log(expensive);

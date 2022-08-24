// 1 var let const
// break up with var

const number = [12, 546, 45, 98];
let salary = 1000000000;
salary = 455000000000;

// 2 default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0) {
  const remaining = salary + salary * tax;
  const total = remaining * bonus;
  return total;
}

// 3 temaplate string
const elementHtml = `
    <div>
        <h3>Name</h3>
        <p>Address</p>
        <p>Salary: ${calculateSalary(1000000, 0, 0)}
        <p>Others: ${number[2]}</p>
    </div>`;

// 4 arrow function
const doubleIt = (x) => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5 spread operator
const ages = [11, 13, 15, 14, 10, 16];
// const newAges = [...ages];
// const newAges = [...ages, 22, 24, 23];
const newAges = [10, 8, ...ages, 22, 24, 23];
console.log(newAges);

// destructuring
const { x, y, z, age } = { x: 45, y: 12, z: 34, name: "Rimon", age: 23 };

const { x1, y1, ...c } = { x: 45, y: 12, z: 34, name: "Rimon", age: 23 };

// const [a, b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(d);
console.log(a);
console.log(b);

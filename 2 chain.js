const users = [{ id: 1, name: "abul", job: "doctor" }]; // array is in right side
console.log(users); // [ { id: 1, name: 'abul', job: 'doctor' } ]
console.log(users.name); // undefined
console.log(users[0].name); // abul

const data = {
  count: 5000,
  data: [
    { id: 1, name: "babul", job: "leader" },
    { id: 2, name: "dabul", job: "leader" },
  ],
};

const firstJob = data.data[0].job;
console.log(data);
console.log(data.data);
console.log(data.data[0]);
console.log(data.data[0].job);
console.log(firstJob);

const user = {
  id: 5001,
  name: "Thomas",
  address: {
    street: {
      first: "Main Street",
      second: "second floor",
      third: "Third floor",
    },
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};
// const userFloor = user.address.street.second;
const userFloor = user.address.stret?.second;
console.log(userFloor); // undefined

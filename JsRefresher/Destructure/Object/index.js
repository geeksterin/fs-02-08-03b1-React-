//normal object
// const obj = {
//   firstName: "Samiul",
//   lastName: "Khan",
//   age: 22,
// };
// const { age, school } = obj;
// console.log(age, school);

//alias

// const obj = {
//   firstName: "Samiul",
//   lastName: "Khan",
//   age: 22,
// };
// const { firstName: fname } = obj;
// console.log(obj);
// console.log(fname);

//nested object

const obj = {
  firstName: "samiul",
  lastName: "khan",
  age: 22,
  address: {
    vill: "abc",
    po: "efhk",
    phone: {
      code: 91,
      number: 7003797700,
    },
  },
};
// const { firstName, lastName, age, address } = obj;
// const { vill, po, phone } = address;
// const { code, number } = phone;
// console.log(address, vill, po, code, number);

// const {
//   firstName,
//   lastName,
//   age,
//   address: {
//     vill,
//     po,
//     phone: { code, number },
//   },
// } = obj;

// console.log(firstName, lastName, vill, po, code, number);

// function sayHi({ firstName, lastName }) {
//   console.log(`${firstName} ${lastName} say hi`);
// }

// sayHi(obj);

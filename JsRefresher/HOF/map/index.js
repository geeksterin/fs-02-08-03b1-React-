// function HOF1(cb)
// {

// }

// HOF1(function ()
// {

// })

// function HOF2()
// {
//     return function ()
//     {

//         }
// }

//map,filter

const nums = [1, 2, 3, 4, 5];
function myMap(cb) {
  const newnums = [];
  for (let num of nums) {
    let mappedNum = cb(num);
    newnums.push(mappedNum);
  }
  return newnums;
}
console.log(nums);
function cb(num) {
  if (num % 2 == 0) return num * 5;
  else return num * 4;
}
const updated1 = myMap(cb);
console.log(updated1);
const updated2 = nums.map(cb);
console.log(updated2);

const users = [
  {
    fname: "Samiul",
    lname: "Khan",
  },
  {
    fname: "Priyam",
    lname: "Gautam",
  },
  {
    fname: "Hasme",
    lname: "Rafsanjani",
  },
  {
    fname: "Lal Ji",
    lname: "singh",
  },
];

const names = users.map((user) => {
  return `${user.fname} ${user.lname}`;
});
console.log(names);

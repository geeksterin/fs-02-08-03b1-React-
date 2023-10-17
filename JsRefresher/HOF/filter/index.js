const nums = [1, 2, 3, 4, 5, 6];
function myfilter(predicate) {
  const newarry = [];
  for (let num of nums) {
    if (predicate(num)) {
      newarry.push(num);
    }
  }
  return newarry;
}
function predicate(num) {
  return num % 2 == 0 ? true : false;
}
const updated1 = myfilter(predicate);
const updated2 = nums.filter(predicate);
console.log(updated1);
console.log(updated2);

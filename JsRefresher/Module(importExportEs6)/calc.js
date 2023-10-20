export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function div(a, b) {
  return a / b;
}

export function mul(a, b) {
  return a * b;
}

export default function doAll(a, b) {
  console.log(add(a, b), sub(a, b), mul(a, b), div(a, b));
}

let num = add(2, 3);
num = add(3, 2);
num = add(5, 4);

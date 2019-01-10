// function square(x) {
//   return x * x
// }
//
// const squareArrow = (x) => {
//   return x * x
// }
//
// const squareArrow = (x) => x * x
//
// console.log(squareArrow(4))

const fullName = 'Brian Cameron'

const firstName = (name) => {
  return name.split(' ')[0]
};

const lastName = (name) => name.split(' ')[1]

console.log(firstName(fullName))
console.log(lastName(fullName))

const add =  (a, b) => {
  // console.log(arguments)
  return a + b;
}

console.log(add(55, 1, 1001))


const user = {
  name: 'Brian',
  cities: ['Boston', 'Foxboro', 'Mansfield'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}

console.log(user.printPlacesLived())


// challenge

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => this.multiplyBy * num)
  }

}

console.log(multiplier.multiply(multiplier.multiplyBy))

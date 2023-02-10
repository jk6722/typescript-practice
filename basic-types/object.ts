const person1 = {
  name: 'Mark',
  age: 39,
}
//person1 is not "object" type.
//person1 is "{name: string, age: number}" type.


//create by Object.create
const person2 = Object.create({
  name: 'Mark',
  age: 39,
})
//person2 is "any" type.

const obje = Object.create([])
obje.push([{name: 'Hero', age: 29}])
obje.push([{name: 'Mark', age: 39}])

console.log(obje)
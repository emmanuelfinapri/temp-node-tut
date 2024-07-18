// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names")
const sayHii = require('./5-utils')
const data = require('./6-alternative-flavor')
const myVal = require('./7-mind-grenade')

console.log(names)

sayHii.sayHi(`Emmanuel`)
sayHii.greet(names.john)
sayHii.greet(names.peter)

console.log(data.singlePerson)
console.log(data.items)

//DOM is oop meaning that each node has its own set of properties and methods that we can change/add/methods.
// of like using a sledgehammer to kill a mosquito

var naser = 'masri';
console.time('this is took time');
console.log(naser);
console.log(naser);
console.log(naser);
console.log(naser);
console.log(naser);
console.log(naser);
console.timeEnd('this is took time');

//Init var or let its meaning resign it but we cant do that with const
var greeting;
//console.log(greeting) ==> undefined

greeting = 'hello';
//console.log(greeting)==> hello

//letters,numbers, _, $
// cant start with number

var $naser = 'money'; //its okay to use $ in a virable
//create a constructor function then start with an upper case, when u create a class.

const person = {
  name: 'john',
  age: 40,
  color: 'red'
};
person.age = 30; //resign the age

const personArray = [1, 2, 3, 4, 5];
personArray.push(6);
console.log(personArray);
//u cant do personArray =[1,2,3,4,5,6] cz personArray here is a new entity, we were not just mutating it.
//const make ur code more robust.
//Reference data type/objects: they're access by the actual value they're access by a reference, and they're also considered objects.
//object wrappers for strings addEventListenernd numbers.
//so js is whats known as a dynamically typed language and this is means that the data types are associated with the actual values and not the variables themselves. Now why Typescript? to turn js into a statically typed language.we also v other modules and add ons like flow or flow J.S. which can give us typing in javascript.

//PRIMITIVE

//String
const name = 'john masri';
console.log(typeof name);

//type null is object (googleha)

const car = null;
console.log(typeof car); //==>ull get object and thats a bug in js
const sym = Symbol();
console.log(typeof sym); //==>symbol

//and these are going to all come back as objects.
//REFERENCE
//Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies); //==>ull get object

const address = {
  city: 'Boston',
  state: 'MN'
};
const today = new Date();
console.log(today);
console.log(typeof today);

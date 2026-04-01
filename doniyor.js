// 1-masala
// Array.prototype.multiply = function(){
//   return this.map(function(x){
//     return x * 2
//   })
// }

// let arr = [2, 4, 6, 8]

// console.log(arr.multiply());

// 2-masala
// String.prototype.reverse = function(){
//   let str = ""
//   for (let i = this.length - 1; i >= 0; i--) {
//     str += this[i]
//   }
//   return str
// }
// let str = "Hello World"

// console.log(str.reverse());

// 3-masala
// function MyObject (name){
//   this.name = name
// }
// MyObject.prototype.sayHello = function(){
//   return "Hello my name is " + this.name
// }

// const obj = new MyObject ("Doniyor")

// console.log(obj.sayHello());

// 4-masala
// function MyArray(name) {
//   this.name = name;
// }

// MyArray.prototype.sayHello = function () {
//   return this.name;
// };

// const arr1 = new MyArray("MERS");
// const arr2 = new MyArray("BMW");

// const result = [arr1.sayHello(), arr2.sayHello()];

// console.log(result);

// 5-masala
// Array.prototype.myConcat = function (secondArray) {
//   return [...this, ...secondArray];
// };

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// console.log(arr1.myConcat(arr2));

// 6-masala
// Object.prototype.myKeys = function(){
//   return Object.keys(this)
// }
// const user = { name: "Ali", age: 17}

// console.log(user.myKeys());

// 7-masala
// Object.prototype.sayHi = function(){
//   return "Salom"
// }

// const obj = {}
// delete Object.prototype.sayHi

// const isDeleted = obj.sayHi === undefined
// console.log(isDeleted);

// 8-masala
// String.prototype.toUpperCustom = function(){
//   return this.toUpperCase()
// }
// const text = "javascript"

// console.log(text.toUpperCustom());

// 9-masala
// Array.prototype.sum = function(){
//   let result = 0
//   for (let i = 0; i < this.length; i++) {
//     result += this[i]
//   }
//   return result
// }
// const nums = [5, 10, 15]

// console.log(nums.sum());

// 10 - masala
// Object.prototype.valuesSum = function() {
//   const values = Object.values(this);
//   let sum = 0;
//   for (let val of values) {
//     if (typeof val === "number") {
//       sum += val;
//     }
//   }
//   return sum;
// };

// const expenses = { food: 100, transport: 50, rent: 300 };
// console.log(expenses.valuesSum());

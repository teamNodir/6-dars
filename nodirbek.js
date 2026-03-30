//1
// function addArrayPrototype(arr) {
//     Array.prototype.double = function() {
//         return arr.map(e => e * 2);
//     };
//     return arr.double();
// }

//2
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Panda"))

//3
// function addUserPrototype(name) {
//   function User(name) {
//     this.name = name;
//   }
//   User.prototype.sayHello = function () {
//     return `Hello ${this.name}`;
//   }; return new User(name).sayHello();
// }

//4
// function multiObjectPrototype(name1, name2) {
//     function Car(name) {
//       this.name = name;
//     }
//     Car.prototype.getName = function(){
//       return this.name
//     }
//     const a = new Car(name1);
//     const b = new Car(name2);
//     return [a.getName(), b.getName()];
// }

//5
// function customConcat(arr1, arr2) {
//   Array.prototype.myConcat = function (arr) {
//      return [...this, ...arr];
//   };
//   return arr1.myConcat(arr2);
// }
//6
// function addKeysPrototype(obj) {
//     Object.prototype.myKeys = function() {
//       return Object.keys(this);
//     };
//     return obj.myKeys();
// }

//7

//8
// function stringUpper(str) {
//     String.prototype.toUpperCustom = function() {
//       return this.toUpperCase()
//     };
//     return str.toUpperCustom();
// }

//9
// function arraySumPrototype(arr) {
//     Array.prototype.sum = function() {
//       return this.reduce((a, b) => a + b, 0)
//     };
//     return arr.sum();
// }

//10
// function objectValuesSum(obj) {
//     Object.prototype.valuesSum = function() {
//       let s = Object.values(this)
//       return s.reduce((a,b)=> a+b,0)
//     };
//     return obj.valuesSum();
// }
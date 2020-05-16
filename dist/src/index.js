"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
const person = {
    name: 'jack',
    age: 21
};
/*const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];
fruit.reduce()*/
const book = ['business', 1500, false];
book.push(21);
console.log(book[2]);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
let unionType = 10;
//unionType.toUpperCase();
//unionType = 'hello';
//unionType.toUpperCase();
let unionTypes = ['hello', 21];
const apple = "apple";
let clothSize = "large";
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
console.log(sayHello());
let tmp;
//let tmpNull: null = undefined;
const anotherAdd = function add(num1, num2) {
    return num1 + num2;
};
const doubleNumber = number => number * 2;
//function doubleAndHandle(num: number, cb: (num: number) => number): void{
//const doubleNum = cb(num * 2);
//console.log(doubleNum);
//}
//doubleAndHandle(21, doubleNum => {
//    return doubleNum
//});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 299;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('aaa'));

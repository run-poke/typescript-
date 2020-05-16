let hasValue = true;
let count  = 10;
let float  = 3.14;
let negative  = -0.12;
let single  = 'hello';
let double = "hello";
let back = `hello`;
let hello;

const person = {
    name: 'jack',
    age:21
}

/*const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];
fruit.reduce()*/

const book: [string, number, boolean] = ['business', 1500, false];
book.push(21);

console.log(book[2]);

enum CoffeeSize  {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI ='VENTI'
}

const coffee = {
    hot: true,
    size:CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT

let unionType: number | string = 10;
//unionType.toUpperCase();
//unionType = 'hello';
//unionType.toUpperCase();

let unionTypes: (number | string)[] = ['hello', 21]

const apple = "apple";

let clothSize: 'small' | 'medium' | 'large' = "large"


type ClothSize　='small' | 'medium' | 'large'
const cloth: {
    color: string;
    size:ClothSize
} = {
    color: 'white',
    size:'medium'
}

function add(num1: number, num2: number):number {
    return num1 + num2
}

function sayHello() :void{
    console.log('Hello!');
}
console.log(sayHello());
let tmp: undefined;
//let tmpNull: null = undefined;

const anotherAdd: (n1: number, n2: number) => number = function add(
  num1: number,
  num2: number
): number {
  return num1 + num2;
}

const doubleNumber: (num: number) => number = number => number * 2;

//function doubleAndHandle(num: number, cb: (num: number) => number): void{
    //const doubleNum = cb(num * 2);
    //console.log(doubleNum);
//}

//doubleAndHandle(21, doubleNum => {
//    return doubleNum
//});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 299;
unknownInput = true;
text = anyInput
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

function error(message: string):never {
    throw new Error(message);
}

console.log(error('aaa'))
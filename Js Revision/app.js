//======================================================JavaScript======================================================

// Variable: It is a space in RAM memory where we can store data temporary. variable has 2 parts 
// 1) varibale Declaration: It mean you just occopie the scpace. It include a special key words like (var, let, const) & varibale name.
// 2) variable initilization: It means you assign some value to a variable using assignment operator (=).

// ************************************************************ DATA TYPES ******************************************************************

//Data Type divide mainly 2 types: 1) Primitive 2) Non-Primitive
// 1) Primitive: It allow you to store only single data value one at a time.
// 2) Non-Primitive: It allow you to store multiple data value.

//===============================================================================================================================
// 1) Primitive: There are many Primitive data types. some common data types are there:

// 1) String: It is a data types in which you can store text data inside "" Double or '' Single Quotes.
var user_name = "Waqar";
console.log(user_name);
// typeof: It is a predefine property used to check type of Variable or Expression.
console.log(typeof user_name); //string

// 2) Number: It used to store numbers you can't use double quotes when you store numbers.
let number = 20;
console.log(number);
console.log(typeof number); //number

// 3) Boolean: It used to store true or false value you can't use double quotes when you store numbers.
let bool = true;
console.log(bool);
console.log(typeof bool); //boolean

// 4) Undefined: It a special type of data that hold only undefined value. when you only declare a varible its by default value is undefined.
let undef;
console.log(undef);
console.log(typeof undef); //undefine

// 5) Boolean: null is a primitive value. However, typeof returns "object". This is a well-known bug in JavaScript and has historical reasons.
let n = null;
console.log(n);
console.log(typeof n); //object 

// 6) Bigint: It can store only number but i can also store huge value as compared to number data type. but after value must add n (represent bigint).
let big = 9223372036854775807n;
console.log(big);
console.log(typeof big); //bigint 

//===============================================================================================================================
// 2) Non-Primitive: It includes (Objects and Arrays);

// 1) Object: It can hold multiple data in the form of key-value pair. It is used where we want to store anyone things complete information (like human, car).
const person = {
    firstName: "Waqar",
    lastName: "Ahmed", 
    age: 22,
}
console.log(person);
console.log(typeof person); //object

// 2) Array: It is used to store multiple value of anything. inside [] you can add data.
var arr = ["Waqar" , "Ahmed" , "Rashid", "Ahad" , "Hammad"];
console.log(arr);
console.log(typeof arr); //object

// ************************************************************ OPERATORS ******************************************************************
//There are many types of operators available in JS. operators used to do some operation on operands (data).
/* 1) Arithmetic Operators
   2) Relational Operators
   3) Logical Operators
   4) Assignment Operators 
   5) Compound Operators */

   //===============================================================================================================================
// 1) Arithmetic Operators: it used to do some basic operation like add, subtract etc.

// 1) Addition
console.log(2 + 2); //4

// 2) Subtraction
console.log(5 - 2); //3

// 3) Multiplication
console.log(2 * 2); //4

// 4) Division
console.log(2 / 2); //1

// 5) Modulation
console.log(2 % 2); //0

//===============================================================================================================================
// 2) Relational Operators: it used to do compare 2 value.

// 1) Greater
console.log(2 > 1); //true
console.log(1 > 2); //false

// 2) Less
console.log(1 < 2); //true
console.log(2 < 1); //false

// 3) Equal to: It only check value not data type.
console.log(2 == "2"); //true
console.log(2 == 2); //true

// 4) Strict Equality: It checks value and data type.
console.log(2 === 2); //true
console.log(2 === "2"); //false

// 5) Greater than equal to
console.log(2 >= 2); //true
console.log(1 >= 2); //false
console.log(5 >= 2); //true

// 6) Less than equal to
console.log(2 <= 2); //true
console.log(1 <= 2); //true
console.log(5 <= 2); //false

// 7) Not Equal to: 
console.log(2 != 2); //false
console.log(1 != 2); //true

//===============================================================================================================================
// 3) Logical Operators: it used to do some conditional operation like AND, OR and NOT etc.

// 1) AND: in which all condition must be true
console.log(2 >= 2 && 1 < 2 ); //true
console.log(2 < 2 && 1 < 2 ); //false

// 2) OR: in which anyone condition must be true
console.log(2 > 2 || 1 > 2 ); //false
console.log(2 < 2 || 1 < 2 ); //true

// 3) NOT: in which anyone condition must be true
console.log(!true); //false

//===============================================================================================================================
// 4) Assignment Operators: it used to assign some value to a variable.
var num = 5;
console.log(num);

//===============================================================================================================================
// 5) Compound Operators: it used to assign the value in the same variable on which do some operation.

// 1) Compound Addition Operator
var num = 10;
num += 5; // num = num + 5
console.log(num); //15

// 2) Compound Subtraction Operator
var num = 10;
num -= 5; // num = num - 5
console.log(num); //5

// same like you can /= , *=, %= 

// 3) Compound Exponential Operator: It behave like we can multiple a value by its power. left value is a base value and right value is a power value
var num = 10;
num **= 3; // num = num * num * num 
console.log(num); //1000

// ************************************************************ INCREMENT/DECREMENT ******************************************************************
//Increment: It means increas a value by only 1 value. we have pre or post Increment.
var num = 5;
console.log(num++); //5 it is a post increment
console.log(++num); //7 it is a pre increment


//Decrement: It means decrease a value by only 1 value. we have pre or post Decrement.
var num = 5;
console.log(num--); //5
console.log(--num); //3

// ************************************************************ CONDITIONS ******************************************************************

// 1) if, else-f, else condition structure.
let userAge = 21;
if( userAge >= 18 ){
    console.log("user are eligible for the job");
}

if( userAge >= 18 && userAge <=50 ){
    console.log("user are eligible for the job");
}else{
    console.log("user are not eligible for the job");
}

if( userAge >= 10 && userAge <=16 ){
    console.log("user are Boy Ager");
}else if(userAge >= 18 && userAge <=50){
    console.log("user are Men ");
}else{
    console.log("user are Old");
}

// 2) Switch Statement: It is used for only comparision

let day = 3;

switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day');
        break;
}

// 3) Conditional Ternary Operator (ES6 Feature)
var userInput = 5;
console.log(userInput == 5 ? "It is true" : "It is false"); 
console.log(userInput >= 5 && userInput <= 1 ? "It is true" : "It is false"); 
console.log( !(userInput == 5) ? "It is true" : "It is false"); 

// ************************************************************ Loops ******************************************************************
// 1) For Loop: When we knwon starting and ending point
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

// 2) While Loop: When we dont know ending point
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Output: 0, 1, 2, 3, 4

// 3) Do-While Loop: When we want to execute only one time time without check condition.
let j = 0;
do{
    console.log(j);
    j++
}while(j < 5);

//Nested Loop
for(let i = 1; i <= 100; i += 10){
    for( let j = i; j <= i + 9; j++){
        console.log(j );
    }
}

// ************************************************************ ARRAY METHOD & PROPERTY ******************************************************************
// 1) Push(): Add elemet in the last of the Array
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 2) Pop(): Delete element at the last of an array.
let fruits2 = ['apple', 'banana', 'orange'];
let lastFruit = fruits2.pop();
console.log(lastFruit); // Output: 'orange'
console.log(fruits2);   // Output: ['apple', 'banana']

// 3) Shift(): Remove the first element of an array
let fruits3 = ['apple', 'banana', 'orange'];
let firstFruit = fruits3.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits3);    // Output: ['banana', 'orange']

// 4) Unshift(): Add elemnt at the beginning of an array
let fruits4 = ['banana', 'orange'];
fruits4.unshift('apple');
console.log(fruits4); // Output: ['apple', 'banana', 'orange']

// 5) Splice(): add or element the element where you want in array
let fruits5 = ['apple', 'banana', 'orange'];
fruits5.splice(1, 1, 'grape', 'kiwi'); // Starting at index 1, remove 1 element, and add 'grape' and 'kiwi'
console.log(fruits5); // Output: ['apple', 'grape', 'kiwi', 'orange']

// 6) Slice(): used to make shallow a copy of an element where you want. 
let fruits6 = ['apple', 'banana', 'orange', 'grape'];
let citrusFruits = fruits6.slice(1, 3);
console.log(citrusFruits); // Output: ['banana', 'orange']
console.log(fruits6);      // Output: ['apple', 'banana', 'orange', 'grape'] (original array is unchanged)

// 7) Concat(): used to combined array
let fruits1 = ['apple', 'banana'];
let fruit11 = ['orange', 'grape'];
let allFruits = fruits1.concat(fruit11);
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape']

// 8) forEach(): Iterate of individual array element. do not return anything.
let fruitsName = ['apple', 'banana', 'orange'];
fruits.forEach(function(fruit) {
  console.log(fruitsName);
});
// Output:
// apple
// banana
// orange

// 9) Map(): return new array with some operation 
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(number) {
  return number * number;
});
console.log(squares); // Output: [1, 4, 9, 16]

// 10) Filter(): Return an array of statisfied condition 
let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// 11) Find(): Return first satisfied element if not found return undefined.
let numbers3 = [4, 9, 16, 25];
let firstGreaterThanTen = numbers3.find(function(number) {
  return number > 10;
});
console.log(firstGreaterThanTen); // Output: 16

// 12) for of Loop: Ittrate over the array or obj directly.
let fruitNames = ['apple', 'banana', 'orange'];
for (let fruit of fruitNames) {
  console.log(fruit);
}
// Output:
// apple
// banana
// orange

// 13) Sets: It is a construction that stores only unique values. 
let num2 = [2,2,2,4,6,7,8,9,6,4,3];
let sets = new Set(num2);
console.log(num2); // [2, 2, 2, 4, 6, 7, 8, 9, 6, 4, 3]
console.log(sets); // [2, 4, 6, 7, 8, 9, 3]

// ************************************************************ FUNCTIONS ******************************************************************
//It is a piece of code that used to nultiples time without copy all instructions

// 1) Normal Function: 
function sayHello(name){
    console.log(`Hello ${name}`);
}

function tablePrint(table){
    for(let i = 1; i <= 10; i++){
        console.log(`${table} X ${i} = ${table * i}`);
    }
}

// 2) Arrow Function: used as a callback function 
const sayHi = (name) => {
    return `Hello ${name}`
}

const mul = (num) => num * 2;

// 3) Ananomous Function: 
let x = function () {  
    console.log('It is an anonymous function');  
};

// 4) Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("Ananomous Immediately Invoked Function Expression");
})();

// ************************************************************ OBJECT ******************************************************************
//Every Obj has 2 Things:
// 1) Property
// 2) Method/Function

let person1 = {
    firstName: "Waqar",
    lastName: "Ahmed",
    age: 22,
    intro: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
};
//acces prop or method one by one 
console.log(person1.firstName);
console.log(person1.intro());
//add prop or method
person1.nationality = "Pakistani";
person1.sayHi = function(){
    console.log("Waqar");
}
//for in: used to acces all things of OBj
for( const key in person1){
    console.log(key , person1[key]);
}
//delete prop & Method
delete person1.nationality
delete person1.sayHi
//for in: used to acces all things of OBj
for( const key in person1){
    console.log(key , person1[key]);
}


//nested Obj
let book = {
    bookName: "Advance JS",
    authorName: "Waqar",
    introBook: {
        page: 200,
        price: 500
    },
    getBookInfo: function() {
        return `The book "${this.bookName}" is written by ${this.authorName}. It has ${this.introBook.page} pages and costs ${this.introBook.price} units.`;
    }
};
console.log(book.introBook.page)
console.log(book.getBookInfo()); 

// ************************************************************ CONSTRUCTOR FUNCTION ******************************************************************
//when we have many obj so we define many obj that occopie many storage that is why we have constructor function just one time you make after that in which you make objs just in one line.

function Employee(f_name, l_name, emp_id, emp_age){
    this.firstName = f_name;
    this.lastName = l_name;
    this.empID = emp_id;
    this.empAge = emp_age;
}
const employee1 = new Employee("Waqar", "Ahmed", "123" , "22");
console.log(employee1);
//You can add seperate method or prop
employee1.nationlity = "Pakistani";
console.log(employee1);

// ************************************************************ MATH OBJECT ******************************************************************
// 1) Math.abs(): Returns the absolute value of a number.
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(3));  // Output: 3

// 2) Math.ceil(): Rounds a number UP to the nearest integer.
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.ceil(-4.2)); // Output: -4

// 3) Math.floor(): Rounds a number DOWN to the nearest integer.
console.log(Math.floor(4.7)); // Output: 4
console.log(Math.floor(-4.7)); // Output: -5

// 4) Math.round(): Rounds a number to the nearest integer.
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.4)); // Output: 4

// 5) Math.max(): Returns the largest of zero or more numbers.
console.log(Math.max(1, 3, 2)); // Output: 3
console.log(Math.max(-1, -3, -2)); // Output: -1

// 6) Math.min(): Returns the smallest of zero or more numbers.
console.log(Math.min(1, 3, 2)); // Output: 1
console.log(Math.min(-1, -3, -2)); // Output: -3

// 7) Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // Output: a random number between 0 and 1

// 8) Math.pow():  Returns the base raised to the exponent power.
console.log(Math.pow(2, 3)); // Output: 8 
console.log(Math.pow(5, 2)); // Output: 25 

// 9) Math.sqrt(): Returns the square root of a number.
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(25)); // Output: 5

// ************************************************************ DEFAULT/Rest PARAMETER & SPREAD OPERATOR ******************************************************************
// Default parameters allow you to specify default values for function parameters if no value or undefined is passed.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());         // Output: Hello, Guest!
console.log(greet("Alice"));  // Output: Hello, Alice!

// Rest parameters allow you to represent an indefinite number of arguments as an array. They are used in function definitions.
function sum(...numbers) {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    })
    return sum;
}
console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50

// The spread operator allows you to expand an iterable (like an array) into individual elements. It is used in function calls or array literals.
// Spread in function calls
const numbers_arr = [1, 2, 3];
console.log(Math.max(...numbers_arr)); // Output: 3

// Spread in array literals
const moreNumbers = [4, 5, 6];
const allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6]

// ************************************************************ SETTIMEOUT/SETINTERVAL ******************************************************************
setTimeout(function(){
    console.log("Waqar Rana");
}, 2000) //It call after 2 second just one time. It is also used in old version of JS for asynchronous Programmming.

setInterval(function(){
    console.log("Waqar Rana");
}, 2000) //It call after every 2 second.

// ************************************************************ Obj/Array Destrucure ******************************************************************
const person3 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 30
};

// Destructuring assignment
const { firstName, lastName, age } = person;

console.log(firstName); // Output: Alice
console.log(lastName);  // Output: Johnson
console.log(age);       // Output: 30

// Renaming variables
const { firstName: fName, lastName: lName } = person;

console.log(fName); // Output: Alice
console.log(lName); // Output: Johnson

// Default values
const { middleName = "N/A" } = person;
console.log(middleName); // Output: N/A


// array Desctucture
const value = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, third] = value;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// Skipping items
const [, , thirdValue] = value;
console.log(thirdValue); // Output: 3

// Using rest parameter
const [firstNum, secondNum, ...restNumbers] = value;

console.log(firstNum);   // Output: 1
console.log(secondNum);  // Output: 2
console.log(restNumbers); // Output: [3, 4, 5]

// Default values
const [a = 10, b = 20] = [5];
console.log(a); // Output: 5
console.log(b); // Output: 20

// ************************************************************ Async Programming ******************************************************************

//Asynchronous programming in JavaScript allows code to execute without blocking the main thread, enabling tasks like I/O operations (e.g., network requests, file reading) to run concurrently. This approach improves performance and responsiveness, especially in environments where tasks might take variable amounts of time to complete.
/* Key Concepts:
Callbacks: Functions passed as arguments to other functions, executed after the completion of a task.
Promises: Objects representing the eventual completion (or failure) of an asynchronous operation, allowing chaining with .then() and .catch().
async/await: Syntax that simplifies working with promises, making asynchronous code look and behave more like synchronous code. */

// callbacks
function getData(dataID, getNextdata){
    setTimeout(() => {
        console.log("data" , dataID);
        if(getNextdata){
            getNextdata()
        }
    },2000)
}

//Callback hell problem
getData(1, () => {
    console.log("calling data 2");
    getData(2, ()=>{
    console.log("calling data 3");
        getData(3, ()=>{
    console.log("calling data 4");
            getData(4)
        })
    })
})
// after that problem JS introduce promises for solve the callback hell.

// Promises: A JS Promises can be:
//  Pending: the result is undefined 
//  Resolved: the result is a value (fulfilled) resolve(result)
//  Rejected: the result is an error obj reject(error)

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am a Promise");
            resolve("success");
            // reject("Network Error")
        }, 1000);
    });
}
let promise = fetchData();
promise.then((res) => {
    console.log("Promise Fullfill", res); 
});
promise.catch((err) => {
    console.log("Rejected", err); 
});

//promises chaining:
function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am a Promise");
            resolve("success");
            // reject("Network Error")
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am a Promise");
            resolve("success");
            // reject("Network Error")
        }, 1000);
    });
}
//==============================================================
console.log("data 1 fetching....");
fetchData1().then((res) => {
    console.log("Promise Fullfill", res);

    console.log("data 1 fetching....");
    fetchData2().then((res) => {
        console.log("Promise Fullfill", res);
    })
    fetchData2().catch((err) => {
        console.log("Rejected", err); 
    });
});
fetchData1().catch((err) => {
    console.log("Rejected", err); 
});

//==============================================================
fetchData().then((res) => {
    return fetchData();
}).then((res) => {
    return fetchData();
}).then((res) => {
    console.log(res);
})
// after that problem JS introduce async/await for solve the promise chain.

// async: always return promise

function API(){
    return new promise((res, rej) => {
        setTimeout(()=>{
            console.log("Weather data");
        }, 3000)
    })
}

(async function getWeatherData(){
    await API();
    await API()
})();

// ************************************************************ Async Programming ******************************************************************
// The fetch API is a modern way to make HTTP requests in JavaScript. It returns a Promise that resolves to the Response object representing the response to the request.

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

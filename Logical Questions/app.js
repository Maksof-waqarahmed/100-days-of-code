//Filter Method:
// 1. Write a function that filters out all even numbers from an array.
const numbers = [2, 3, 4, 56, 79 , 656, 456, 632, 79,  221,880, 52, 87];
let evenNum = numbers.filter(num => num % 2 === 0);
console.log("Even Number" , evenNum);

// 2. Given an array of strings, filter out the strings that contain more than 5 characters.
const str = ["waqar" , "Ahmed" , "Ahad" , "Hamza" , "Nabi", "Hassan" , "Arslan" , "sami"];
let strLength = str.filter(ele => ele.length > 5);
console.log("Filterd Name" , strLength);

// 3. Filter out all objects in an array that do not have a specific property.
const arrObj = [
    { id: 1, name: "Object 1", targetProperty: "Value 1" },
    { id: 2, name: "Object 2" },
    { id: 3, name: "Object 3", targetProperty: "Value 3" },
    { id: 4, name: "Object 4", targetProperty: "Value 4" },
    { id: 5, name: "Object 5" },
    { id: 6, name: "Object 6", targetProperty: "Value 6" }
];
let targetedObj = arrObj.filter(obj => !obj.targetProperty);
console.log(targetedObj);

// 4. Write a function to filter out all the prime numbers from an array.
function isPrime(arr) {
    return arr.filter(num => {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true; 
    });
}
let primeNumbers = isPrime([2, 3, 4, 56, 79, 656, 456, 632, 79, 221, 880, 52, 87]);
console.log(primeNumbers);

// 5. Filter out all strings in an array that start with a specific letter.
const str1 = ["waqar" , "Ahmed" , "Ahad" , "Hamza" , "Nabi", "waqar" ,"Hassan" , "Arslan" , "sami"];
let sameLetter = str1.filter(ele => ele[0] === "w");
console.log(sameLetter);

// Map Method:
// 6. Use .map to convert an array of numbers to their squares.
const numbers1 = [2, 3, 4, 56, 79 , 656, 456, 632, 79,  221,880, 52, 87];
let sqr = numbers1.map(num => num * 2);
console.log(sqr);

// 7. Given an array of strings, use .map to convert all strings to uppercase.
const str2 = ["waqar" , "Ahmed" , "Ahad" , "Hamza" , "Nabi", "waqar" ,"Hassan" , "Arslan" , "sami"];
let capitalLetter = str2.map(ele => ele.toUpperCase());
console.log(capitalLetter);

// 8. Use .map to extract a specific property from an array of objects.
const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
];
const names = users.map(user => user.name);
console.log(names);

// 9. Convert an array of strings to an array of their lengths using .map.
const str3 = ["waqar" , "Ahmed" , "Ahad" , "Hamza" , "Nabi", "waqar" ,"Hassan" , "Arslan" , "sami"];
let lengthEle = str3.map(ele => ele.length);
console.log(lengthEle);

// 10. Use .map to add a new property to each object in an array of objects.
const employee = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
];
let updatedEmp = employee.map(obj => {
    return { ...obj, location: "Pakistan" };
});
console.log(updatedEmp);

// Reduce Method:
// 11. Use .reduce to sum all numbers in an array.
const numbers3 = [2, 3, 4, 56, 79 , 656, 456, 632, 79,  221,880, 52, 87];
const sumOfArr = numbers3.reduce((acc, curr) => acc + curr, 0 );
console.log(sumOfArr);

// 12. Use .reduce to flatten a nested array.
const nestedArray = [[1, 2, [3]], [4, 5], [6, [7, 8], 9]];
let flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr).flat(), []);
console.log(flattenedArray);

// 13. Write a function that uses .reduce to count the occurrences of each element in an array.
function occurrence(arr) {
    let eleOccurrence = arr.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});
    return eleOccurrence;
}

// 14. Use .reduce to find the maximum value in an array of numbers.
const numbers2 = [2, 3, 4, 56, 79 , 656, 456, 632, 79,  221,880, 52, 87];
let maxValue1 = numbers2.reduce((acc, curr) => Math.max(acc, curr) , 0);
console.log(maxValue1);

// 15. Write a function that uses .reduce to group objects by a property.
function groupObj(objs, property) {
    return objs.reduce((acc, currObj) => {
        const key = currObj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(currObj);
        return acc;
    }, {});
}
const people = [
    { name: 'Alice', age: 28, city: 'New York' },
    { name: 'Bob', age: 34, city: 'San Francisco' },
    { name: 'Charlie', age: 28, city: 'New York' },
    { name: 'David', age: 34, city: 'New York' }
];
const groupedByAge = groupObj(people, 'age');
console.log(groupedByAge);

// Splice Method:
// 16. Use .splice to remove the third element from an array.
const numbers4 = [2, 3, 4, 56, 79 , 656, 456, 632, 79,  221,880, 52, 87];
let deletedArr = numbers4.splice(3, 1);
console.log(deletedArr);
console.log(numbers4);

// 17. Use .splice to replace the last element in an array with a new value.
const numbers5 = [2, 3, 4, 56, 79 , 656, 456, 632, 79,  221,880, 52, 87];
let replace = numbers5.splice(-1, 1, 21);
console.log(replace);

// 18. Use .splice to insert a new element at the second position in an array.
numbers5.splice(2, 0, 21);
console.log(numbers5);

// 19. Write a function that uses .splice to remove every second element from an array.
function removeEverySecondElement(arr) {
    for (let i = arr.length - 1; i >= 0; i -= 2) {
        arr.splice(i, 1);
    }
    return arr;
}

// 20. Use .splice to remove all elements from an array starting from a specific index.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.splice(5);
console.log(array);

// For Loops:
// 21. Write a for loop to print all elements of an array.
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// 22. Write a for loop to print all keys and values of an object.
const people2 = { 
    name: 'Alice', 
    age: 28, 
    city: 'New York' 
};
const keys = Object.keys(people2);
const values = Object.values(people2);
for (let i = 0; i < keys.length; i++) {
    console.log(`Key: ${keys[i]}, Value: ${values[i]}`);
}

// 23. Write a for loop to find the sum of all numbers in an array.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let i = 0; i < array1.length; i++){
    sum += array1[i];
}
console.log(sum);

// 24. Write a nested for loop to find the Cartesian product of two arrays.
const array2 = [1, 2];
const array3 = ['a', 'b'];
let array4 = [];
for(let i = 0; i < array2.length; i++){
    for(let j = 0; j < array3.length; j++){
        array4.push([array2[i] , array3[j]]);
    }
}
console.log(array4);

// 25. Use a for loop to reverse the elements of an array.
let arr = []
for(let i = array1.length - 1; i >= 0; i--){
    arr.push(array1[i]);
}
console.log(arr);

// Ternary Operators:
// 26. Use a ternary operator to check if a number is positive, negative, or zero.
function checkType(num){
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
}
console.log(checkType(5))

// 27. Use a ternary operator to return a default value if a variable is null or undefined.
function defaultValue(num){
    return num === undefined || num === null ? 56 : num 
}
console.log(checkType(5))

// 28. Write a function that uses a ternary operator to determine if a number is even or odd.
let oddEven = 3 % 2 === 0 ? "Even" : "Odd";
console.log(oddEven);

// 29. Use a ternary operator to assign a grade based on a score.
let num = 80;
let grade = num === 80 ? "A1" : num === 70 ? "A" : num === 60 ? "B" : num === 50 ? "C" : "D";
console.log(grade);

// 30.Use a ternary operator to toggle a boolean value.
const bool = true;
let toggle = bool === true ? false : true;
console.log(toggle);

// Array Methods (General):
// 31. Use .forEach to log each element of an array.
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array5.forEach(ele => console.log(ele));

// 32. Use .find to find the first element in an array that meets a condition.
let findValue = array5.find(ele => ele === 4);
console.log(findValue);

// 33. Use .every to check if all elements in an array are greater than a certain number.
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bool2 = array6.every(ele => ele > 1 );
console.log(bool2);

// 34. Use .some to check if any element in an array is a string.
const str4 = ["waqar" , "Ahmed" , "Ahad" , "Hamza" , "Nabi", "waqar" ,"Hassan" , "Arslan" , "sami"];
let tested = str4.some(ele => ele === "waqar");
console.log(tested);

// 35. Use .sort to sort an array of numbers in ascending order.
const ass = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let ascending = ass.sort((a, b) => a - b);
console.log(ascending);

// String Methods:
// 36. Write a function to capitalize the first letter of each word in a string.
function capitalizeEachWord(sentence) {
    return sentence.split(' ')
    .map(word => word.charAt(0)
    .toUpperCase() + word.slice(1))
    .join(' '); 
}
console.log(capitalizeEachWord("this is waqar rana")); 

// 37. Use .split and .join to reverse the words in a sentence.
const strS = "This is Waqar Rana";
const sp = strS.split(" ").reverse().join(" ");
console.log(sp);

// 38. Write a function to check if a string is a palindrome
const strP = "madam";
const pel = strP.split("").reverse().join("");
console.log(strP === pel ? "Its Palindrome" : "Its not a Palindrome");

// 39. Use .replace to replace all occurrences of a word in a string.
function replaceAllOccurrences(str) {
    return str.replace(/apple/g, 'orange');
}
console.log(replaceAllOccurrences("apple pie and apple juice")); // Output: "orange pie and orange juice"

//40. Use .includes to check if a string contains a specific substring.
function containsSubstring(mainString, substring) {
    return mainString.includes(substring);
}

// Object Methods:
// 41. Write a function to clone an object using Object.assign.
function cloneObj(objs){
    // let target = {}
    // return Object.assign(target , objs);
    return Object.assign({} , objs);
}
console.log(cloneObj({ c: 6, d: 7 }));

// 42. Use Object.keys to get all keys of an object.
const person = {
    name: "John Doe",
    age: 30,
    address: "karachi"
};
const keysArr = Object.keys(person);
console.log(keysArr);

// 43. Use Object.values to get all values of an object.
const valueArr = Object.values(person); 1
console.log(valueArr);

// 44. Use Object.entries to convert an object to an array of key-value pairs.
const entries = Object.entries(person);
console.log(entries);

// 45. Write a function to merge two objects.
function mergedObj(obj1, obj2){
    return Object.assign({} , obj1, obj2)
}
console.log(mergedObj({ a: 1, b: 2 }, { b: 3, c: 4 }));

// Functional Programming:
// 46. Write a function that returns a new array with only unique values from the input array.
function uniqueArr(arr){
    return [...new Set(arr)];
}
console.log(uniqueArr(["waqar" , "Ahmed" , "Ahad" , "Hamza" , "Nabi", "waqar" ,"Hassan" , "Arslan" , "sami"]));

// 47. Write a function that composes two functions (function composition).
function compose(f, g, s) {
    return function(x) {
        return f(g(s(x)));
    };
}
function add(x) {
    return x + 2;
}
function multiply(x) {
    return x * 3;
}
function subs(x) {
    return x - 3;
}
const composedFunction = compose(add, multiply, subs);
console.log(composedFunction(5));

// 48. Write a function that curries another function (function currying).










//Find The max Value in an array
function maxValue(arr) { return Math.max(...arr) };

//To check if a given string is a palindrome (reads the same forwards and backwards). 
function palindrome(str){ return str.toLowerCase().split("").reverse().join("") === str.toLowerCase() };

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function evenNumber(arr){ return arr.filter(ele => ele % 2 == 0) };

//Write a JavaScript program to calculate the factorial of a given number. 
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
//=============================================================
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
//=============================================================
function factorial(num) { return (num === 1 || num === 0) ? 1 : (num * factorial(num - 1)) };
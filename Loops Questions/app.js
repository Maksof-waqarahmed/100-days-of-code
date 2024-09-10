// 1) Given an array of integers, count the number of even numbers. Use the most appropriate method or loop to solve this problem.
const nums = [2, 3, 5, 6, 7, 12, 345, 676, 4, 545, 454, 57, 79, 642, 809, 24];
let evenNumbers = nums.reduce((count, number) => {
    if (number % 2 === 0) {
        count += 1;
    }
    return count;
}, 0);
console.log("Even Number", evenNumbers);

// 2) Given an array of numbers, create a new array where each value is doubled. Determine the most suitable method to use.
const numbers = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
let doubledNum = numbers.map(num => num * 2);
console.log("Double Numbers" , doubledNum);

// 3) Given an array of integers, find the first negative number in the array. If there is no negative number, return null.
const numbersArray = [2, 3, 5, 6, 7, 8, 9, -8, 45, 12, 34, 56, 78];
let negativeNum = numbersArray.find(num => num < 0) ?? null;
console.log("Negative Number" , negativeNum);

// 4) Given an array of integers, sum the numbers until the first negative number is encountered. If there are no negative numbers, sum all the numbers.
const numbs = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
let sum = 0;
let foundNegative = false;
numbs.forEach((num) => {
    if (!foundNegative) {
        if (num < 0) {
            foundNegative = true;
        } else {
            sum += num;
        }
    }
});
console.log("Sum:", sum);

// 5) Given an array of strings, check if a specific string is present in the array. Return true if it is present, otherwise return false.
const str = ["waqar" , "ahmed", "ahad" , "hamza" , "ayan" , "nabeel"];
let found = str.includes("waqar");
console.log("Found" , found);

// 6) Given an array of user names, create an array of greeting messages for each user. For example, if the input array is ['Alice', 'Bob'], the output should be ['Hello, Alice!', 'Hello, Bob!'].
const str1 = ["waqar" , "ahmed", "ahad" , "hamza" , "ayan" , "nabeel"];
let arr = str1.map((ele) => `Hello, ${ele}`);
console.log("Greeting" , arr);

// 7) Given an array of numbers, calculate the sum of all elements using a while loop.
const numbes = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
let i = 0, sumNum = 0;
while(i < numbes.length){
    sumNum += numbes[i]; 
    i++;
}
console.log("Sum Numbers" , sumNum);

// 8) Given an array of strings, concatenate all the strings into a single string.
const greet = ["Hello,", "How" , "are" , "you"]; 
let joinStr = greet.join(" ");
console.log("Join Greeting:" , joinStr);

// 9) Given an array with duplicate elements, create a new array with duplicates removed.
const doublicate = ["waqar" , "ahmed", "ahad" , "hamza" , "ayan" , "nabeel" ,"waqar" , "ahad" , "hamza"];
let removeDublicate = [...new Set(doublicate)];
console.log(removeDublicate);

// 10) Write a function that repeatedly performs an action until a condition is met. For example, generate a random number between 1 and 10 until you get a 7.
function getRandomNumber() {
    let random;
    do {
        random = Math.ceil(Math.random() * 10);
        console.log(random);
    } while (random !== 7);
    console.log("Found 7!" , random);
}

// 11) Given an array of numbers, find the maximum value in the array.
const numbersMax = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
let maxNum = Math.max(...numbersMax);
console.log("Max Number" , maxNum);

// 12) Given an array of numbers, extract all even numbers and calculate their sum.
const numbersEven = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
// let sumEven = 0;
// numbersEven.filter((num) => {
//     if(num % 2 === 0){
//         return sumEven += num;
//     }
// })
// console.log("Max Number" , sumEven);

let sumEven1 = numbersEven.reduce((sum , num) => {
    if(num % 2 === 0){
        return  sum += num;
    }
    return sum
}, 0)
console.log("Max Number" , sumEven1);

// 13) Given an array of any type (numbers, strings, etc.), reverse the order of elements in the array.
const numbersRev = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
let reverse = numbersRev.reverse();
console.log("Reverse Array" , reverse);

// 14) Given an array of numbers and a specific value, count how many times that value appears in the array.
const numbers2 = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78, 8, 9, 8, 45, 3, 5, 6];
const count = {};
for (const ele of numbers2) {
    if (!count[ele]) {
        count[ele] = 1;
    } else {
        count[ele] += 1;
    }
}
console.log(count);

// 15) Given an array of numbers, create a new array where each value is squared.
const numbers3 = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78, 8, 9, 8, 45, 3, 5, 6];
let squaredArray = numbers3.map(num => num * num);
console.log(squaredArray);

// 16) Given an array of numbers and a specific value, find all indices where the value appears.
const numbers4 = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78, 8, 9, 8, 45, 3, 5, 6];
const valueToFind = 8;
let indices = [];
for (let i = 0; i < numbers4.length; i++) {
    if (numbers4[i] === valueToFind) {
        indices.push(i);
    }
}
console.log("Index Of 8" , indices);

// 17) Given an array of objects where each object has a name property, create an array containing just the names.
const person = [
    {
        name: "Waqar Ahmed",
        age: "22",
        position: "Developer",
        address: "Orangi Town"
    },
    {
        name: "Ahad",
        age: "22",
        position: "Developer",
        address: "Orangi Town"
    },
    {
        name: "Hamza",
        age: "22",
        position: "Developer",
        address: "Orangi Town"
    },
    {
        name: "Nabeel",
        age: "22",
        position: "Developer",
        address: "Orangi Town"
    },
]
let nameArr = person.map(obj => obj.name);
console.log("Object Names" , nameArr);

// 18) Given an array of numbers, find the average of all the numbers in the array.
const numbersAvg = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
const sum1 = numbersAvg.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const avg = sum1 / numbersAvg.length;
console.log("Average" , avg);

// 19) Given an array of strings, create an object that counts the frequency of each string.
const doublicateString = ["waqar" , "ahmed", "ahad" , "hamza" , "ayan" , "nabeel" ,"waqar" , "ahad" , "hamza"];
const count1 = {};
for (const ele of  doublicateString) {
    if (!count1[ele]) {
        count1[ele] = 1;
    } else {
        count1[ele] += 1;
    }
}
console.log(count1);

// 20) Given an array containing nested arrays, flatten it into a single array.
const nestedArr = ["JS", [200, 250, ["Waqar Ahmed"]], "Python", [500, 250, ["Waqar Ahmed"]]];
const singleArr = nestedArr.flat(2);
console.log(singleArr);

// 21) Given an array of numbers and a threshold value, remove all elements that are greater than the threshold.
const thresholdArr = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
const thresholdValue = 34;

for (let i = 0; i < thresholdArr.length; i++) {
    if (thresholdArr[i] > thresholdValue) {
        thresholdArr.splice(i, 1);
        i--; 
    }
}
console.log(thresholdArr);
// const thresholdArr = [2, 3, 5, 6, 7, 8, 9, 8, 45, 12, 34, 56, 78];
// const thresholdValue = 34;
// const filteredArr = thresholdArr.filter(num => num <= thresholdValue);

// 22) Given an array of objects where each object has a type property, group the objects by type.
const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'fruit', name: 'orange' }
];
const groupedByType = {};
items.forEach(item => {
    if (!groupedByType[item.type]) {
        groupedByType[item.type] = [];
    }
    groupedByType[item.type].push(item);
});
console.log(groupedByType);

// const groupedByType = items.reduce((acc, item) => {
//     if (!acc[item.type]) {
//         acc[item.type] = [];
//     }
//     acc[item.type].push(item);
//     return acc;
// }, {});

// 24) Given an array of items with different categories, count how many items there are in each category.
const items1 = [
    { category: 'fruit', name: 'apple' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'banana' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'lettuce' },
    { category: 'grain', name: 'rice' }
];
const countByCategory = items1.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = 0;
    }
    acc[item.category]++;
    return acc;
}, {});

console.log(countByCategory);

// 24) Given several arrays, merge them into a single array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = [...array1, ...array2, ...array3];
console.log(mergedArray);

// 25) You want to loop through an array of tasks and stop when you encounter a task marked as "completed."
const tasks = [
    { task: "Clean the house", status: "pending" },
    { task: "Buy groceries", status: "completed" },
    { task: "Do laundry", status: "pending" }
  ];
for(const obj of tasks){
    if(obj.status === 'completed'){
        console.log("Completed task found:", obj.task);
        break;
    }
}
// 26) Write a do...while loop to prompt the user to enter a number and continue prompting until the user enters a number greater than 10.
let userInput;
do{
    userInput = +prompt("Please Enter any Number...");
    console.log(userInput);
}while(userInput !== 7);
console.log("7 found" , userInput);

// Write a do...while loop that continues to sum up user-entered numbers until the user inputs a negative number. After exiting the loop, display the total sum.
let sumOfPositiveNum = 0;
let userInput1;
do {
    userInput1 = +prompt("Please Enter any Number...");
    if (userInput1 >= 0) {
        sumOfPositiveNum += userInput1;
    }
} while (userInput1 >= 0); 
console.log("Sum Of Positive Numbers: ", sumOfPositiveNum);

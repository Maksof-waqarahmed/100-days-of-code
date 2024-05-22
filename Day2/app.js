
//Q3: Implement a function to reverse a given array.

function reverseArray(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

//Q4: Write a program to find the largest element in an array.

function findLargestElement(arr){
    let largestElement = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largestElement){
            largestElement = arr[i]
        }
    }
    return largestElement; 
}

//Q5: Create a function to check if two strings are anagrams of each other.
// A word or phrase made by transposing the letters of another word or phrase. The word "secure" is an anagram of "rescue."

function checkAnagrams(str1, str2){
    let foundChars = [];

    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i] === str2[j]){
                foundChars.push(str2[j]);
                break;
            }
        }
    }

    if(foundChars.length === str1.length && foundChars.length === str2.length){
        console.log("They are anagrams");
    } else {
        console.log("They are not anagrams");
    }
}



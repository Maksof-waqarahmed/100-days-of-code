
//Q1: Write a function to check if a number is prime or not.

/*A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and itself, with no other factors.*/

var num1 = +prompt("Please Enter any number: ")

toCheckPrimeNum(num1)

function toCheckPrimeNum(num) {
    if (num <= 1) {
        console.log("Number should be greater than 1");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) {
            console.log("It's not a Prime Number");
            return;
        }
    console.log("It's a Prime Number");
}

//Q2: Create a function that takes a string and removes all vowels from it.

/* A vowel is a letter that represents a speech sound made with an open vocal tract, such as "a", "e", "i", "o", "u".*/

let userStringInput = prompt("Please Enter any word that contain at least one vowel letter:  ")

removeVowelInString(userStringInput)

//Method 1

function removeVowelInString(str) {
    let string = '';

    str.split('').forEach((char) => {
        if (!"aeiou".includes(char.toLowerCase())) {
            string += char;
        }
    });
    console.log(string)

    return string;
}


//Method 2

function removeVowelInString(str) {
    let string = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
            string += str[i];
        }
    }

    console.log(string);
    return string;
}






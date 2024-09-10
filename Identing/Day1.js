// ++++++++++++++++ Identation Pratice ++++++++++++++++
function sayHello(uName) {
    if (uName === undefined) {
        return console.log("Please Enter Name...."); //It is a called early return statement...
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`Hello ${uName}, How are you Today!..`);
    }
}

function areaOfTriangle(breath, height){
    let area = 1/2 * (breath * height);
    console.log(`The Area of a Triangle is ${area}`);
}

// ++++++++++++++++ Identation + camelCase ++++++++++++++++
function traficController(light){
    switch(light){
        case "red":
            console.log("Stop immediately.");
            break;
        case "yellow":
            console.log("Prepare to stop.");
            break;
        case "green":
            console.log("Proceed or continue driving.");
            break;
        default:
            console.log("Invalid traffic light color.");
    }
}

function calculator(){
    let number1 = +prompt("Enter the value of number1: ");
    let number2 = Number(prompt("Enter the value of number2: "));

    const operator = prompt("Enter a operator ( either +, -, * or / ): ");

    switch(operator) {
        case "+":
            console.log(`${number1} + ${number2} = ${number1 + number2}`);
            break;
        case "-":
            console.log(`${number1} - ${number2} = ${number1 - number2}`);
            break;
        case "*":
            console.log(`${number1} * ${number2} = ${number1 * number2}`);
            break;
        case "/":
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${number1 / number2}`);
            break;
        default:
            console.log("Invalid operator");
    }
}

// ++++++++++++++++ codeOptomization + camelCase + Identation ++++++++++++++++
function checkVowel(char){
    switch(char){
        case "a":
            console.log("Its a vowel Word...");
            break;
        case "b":
            console.log("Its a vowel Word...");
            break;
        case "c":
            console.log("Its not a vowel Word...");
            break;
        case "d":
            console.log("Its not a vowel Word...");
            break;
        case "e":
            console.log("Its a vowel Word...");
            break;
        case "f":
            console.log("Its not a vowel Word...");
            break;
        case "g":
            console.log("Its not a vowel Word...");
            break;
        case "h":
            console.log("Its not a vowel Word...");
            break;
        case "i":
            console.log("Its a vowel Word...");
            break;
        case "j":
            console.log("Its not a vowel Word...");
            break;
            
            //so on........................... but its not a good practice.
    }
}

// 1) How to optimize upper code 
function checkVowel(char){
    switch(char){
        case "a":
            console.log("Its a vowel Word...");
            break;
        case "e":
            console.log("Its a vowel Word...");
            break;
        case "i":
            console.log("Its a vowel Word...");
            break;
        case "o":
            console.log("Its a vowel Word...");
            break;
        case "u":
            console.log("Its a vowel Word...");
            break;
        default:
            console.log("Its not a Vowel Word ");
    }
} // I known just 5 char is a Vowel & other words is a consonant so we compare just vowel words.

// 2) How to optimize upper code 
function checkVowel(char){
    switch(char){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Its a vowel Word...");
            break;
        default:
            console.log("Its not a Vowel Word ");
    }
}

// ++++++++++++++++ shortCode + camelCase + Identation + codeOptimization ++++++++++++++++
function findEmp(name){
    const empName = [
        'Sami','Imran','Sarwar','Usama','Ashir','Jawad','Osama','Ibad','Nabiya','Afsheen'];
    for( const emp of empName ) { return name === emp ? "It an empolyee of MAKSOF." : "It not an empolyee of MAKSOF." }
}

function employeeName(name) {
    const employees = {
        Sami: 'good',
        Imran: 'good',
        Sarwar: 'good',
        Usama: 'good',
        Ashir: 'good',
        Jawad: 'good',
        Osama: 'good',
        Ibad: 'good',
        Nabiya: 'good',
        Afsheen: 'good',
        Aman: 'internee',
        Sharjeel: 'internee',
        Noman: 'internee',
    };
    return  employees[name] === "good" ? `${name}: is an Employee of maksof` : `${name}: is not an Employee of maksof`;
}

// ++++++++++++++++ loopOptimization + shortCode + camelCase + Identation + codeOptimization ++++++++++++++++

function squaring(num){
    const numArr = [6, 9, 6, 4, 8, 2];
    if(!num){ return "Input Any Number" }
    return numArr.map(ele => ele * num);
}
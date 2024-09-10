//Half Pyramid
let halfPyramid = "";
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
        halfPyramid += "* "
    }
    halfPyramid += "\n"; 
}
console.log(halfPyramid);

//Inverted Half Pyramid
let invHalfPyramid = "";
for (let i = 6; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        invHalfPyramid += "* "; 
    }
    invHalfPyramid += "\n"; 
}
console.log(invHalfPyramid); 

//Hollow Inverted Half Pyramid
const size = 6;
let pattern = '';
for (let i = size; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        if (i === size || j === 1 || j === i ) {
            pattern += '* ';
        } else {
            pattern += '  ';
        }
    }
    pattern += '\n';
}
console.log(pattern);

//Full Pyramid
const pattSize = 10;
let fullPyramid = "";

for(let i = 1; i <= pattSize; i++){
    for(let j = i; j <= pattSize -1 ; j++){
        fullPyramid += " ";
    }
    for(let k = 1; k < i; k++){
        fullPyramid += "* "
    }
    fullPyramid += '\n';
}
console.log(fullPyramid);

//Inverted Full Pyramid
const pattSize1 = 10;
let invFullPyramid = "";
for(let i = pattSize1; i >= 1; i--){
    for(let j = i; j <= pattSize1 -1 ; j++){
        invFullPyramid += " ";
    }
    for(let k = 1; k < i; k++){
        invFullPyramid += "* "
    }
    invFullPyramid += '\n';
}
console.log(invFullPyramid);

//Hollow Inverted Full Pyramid
const pattSize2 = 10;
let invHollowPyramid = "";
for(let i =pattSize2; i >= 1; i--){
    for(let j = i; j <=pattSize2 -1 ; j++){
        invHollowPyramid += " ";
    }
    for(let k = 1; k < i; k++){
        if(k === 1 || i === pattSize2 || k === i - 1){
            invHollowPyramid += "* "
        }  else {
            invHollowPyramid += "  ";
        }
    }
    invHollowPyramid += '\n';
}
console.log(invHollowPyramid);

//matrix 4 by 4
let matrixSize = 4;
let matrix = "";
for(let i = 1; i <= matrixSize; i++){
    for(let j = 1; j <= matrixSize; j++){
        if(i == j){
            matrix += "1 "
        } else{
            matrix += "0 "
        }
    }
    matrix += '\n';
}
console.log(matrix);
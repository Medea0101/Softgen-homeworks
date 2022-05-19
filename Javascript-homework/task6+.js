// const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
// let multiply = 1;

// for (i of numbers){
//     if(numbers[i] !== 0)
//     multiply *= numbers[i]
    
// }
// console.log(multiply)


const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
let multiply = numbers
    .filter((el) => el !== 0)
    .reduce((accumulatorValue, currentValue) => accumulatorValue * currentValue);
    console.log(multiply)
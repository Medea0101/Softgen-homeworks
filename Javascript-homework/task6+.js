// const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
// let multiply = 1;

// for (let i of numbers){
//     if(numbers[i] !== 0)
//     multiply *= numbers[i]
    
// }
// console.log(multiply)


const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
console.log(
    numbers
    .filter(num => num !== 0)
    .map(num => num)
    .reduce((total, num) => total * num))


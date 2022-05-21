// const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
// let sum = 0;

// for(let i in numbers){
//     if(numbers[i] > 0){
//         sum += numbers[i];  
//     }       
// }
// console.log(sum);





// using filter and reduce

const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
const sum = numbers
    .filter((num) => num > 0)
    .reduce((total, num) => total + num);
    console.log(sum)
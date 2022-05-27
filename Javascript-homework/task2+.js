// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for(let i of numbers){
//     if(numbers[i]%2){
//         let result = numbers[i]**2;
//         console.log(result);
//     }
// }




// using filter, map and forEach
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
numbers2
    .filter ((num) => num % 2)
    .map((num) => num ** 2)
    .forEach((num) => console.log(num))
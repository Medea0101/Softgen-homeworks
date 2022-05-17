const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
let multiply = 1;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0 || numbers[i] > 0)
    multiply *= numbers[i]
    
}
console.log(multiply)
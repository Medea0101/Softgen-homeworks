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






// examples 

    const fruits = [ 'banana', 'orange', 'apple', 'mango'];
    const reduced = fruits
    .reduce((total, fruit)=> total + '-' + fruit, " + "
    )
    console.log(reduced);

    const numbers2 = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
    console.log(
        numbers2
        .reduce((total, num) => total + num, 0)
    )

    const numbers3 = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
    console.log(
        numbers3
        .filter((num) => num !== 0)
        .reduce((total, num) => total * num, 1)
    )

    const numbers4 = [-2, 0, 6, 11, -1, 7, 9];
    console.log(
        numbers4
        .filter((num) => num !== 0)
        .map((num) => num ** 2)
        .reduce((total, num) => total * num, 1)
    )



    const fruits2 = [ 'banana', 'orange', 'apple', 'mango'];
    const reduced2 = fruits2
    .map((fruit) => fruit.toUpperCase())
    .reduce((total, fruit)=>{
        total[fruit] = true;
        return total; },{})
    console.log(reduced2);



//ramdenjer gvxvdeba masivshi elementi , sixshire
    const fruits3 = [ 'banana', 'banana', 'orange', 'apple', 'mango'];
    const reduced3 = fruits3
    .map((fruit) => fruit.toUpperCase())
    .reduce((total, fruit)=>{
        if(!(fruit in total)){
            total[fruit] = 0
        }
        total[fruit] ++;
        return total }, {})
    console.log(reduced3);

//sixshire stringshi
    const fruits4 = 'banana, banana, orange, apple, mango';
    const reduced4 = fruits4
    .split(' ')    //dayofa masivis elementebad
    .map((fruit) => fruit)   //gadavla yvela elementze
    .reduce((total, fruit)=>{
        if(!(fruit in total)){
            total[fruit] = 0
        }
        total[fruit] ++;
        return total }, {})   //ganmeorebis datvla
    console.log(reduced4);




    

//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
let sum = 0;
function sumTo(n){
    for(i = 1; i <= n; i++){
        sum += i;
    }
    return sum
}
console.log(sumTo(5))


//with recursion

function sumTill(n){
    if (n == 1){
        return 1;
    }
    return n + sumTill(n-1);
}
console.log(sumTill(5))

//The task is to write a function factorial(n) that calculates n! using recursive calls.

function factorial(n) {
    if (n == 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5))


function countFactorial(n){
    return (n != 1) ? n * countFactorial(n -1) : 1;
}
console.log(countFactorial(5))

// Write a function fibonacci(n) that returns the n-th Fibonacci number.

function fibonacci(n){
    if (n <= 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(7))




let num = 0;

function numbersTo() {
    for(let i = 0; i <= 10; i++){
        console.log(i)
    }
    return num++;
}
console.log(numbersTo())

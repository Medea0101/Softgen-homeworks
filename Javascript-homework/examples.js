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
        numbers2.reduce((total, num) => total + num, 0)
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



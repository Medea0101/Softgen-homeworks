const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for(i of numbers){
    if(numbers[i]%2 == 0){
        console.log(numbers[i]);
    } 
}


// using forEach and arrow function
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
numbers2.forEach((el) => {(el % 2) ? true : console.log(el)});

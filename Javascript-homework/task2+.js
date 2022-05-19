const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for(i of numbers){
    if(numbers[i]%2){
        let result = numbers[i]**2;
        console.log(result);
    }
}

// using forEach and arrow function

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
numbers2.forEach((element) => {(element % 2) == 0 ? true : console.log(element**2)})
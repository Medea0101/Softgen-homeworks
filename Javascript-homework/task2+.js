const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for(i of numbers){
    if(numbers[i]%2){
        let result = numbers[i]**2;
        console.log(result);
    }
}
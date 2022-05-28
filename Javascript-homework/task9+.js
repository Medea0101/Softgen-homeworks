
const numbersArr = [2, 0, 6, 3, -11, 24, 5, 101, 11, 1, 17, 9];

function maxNumber(x){
    let max = x[0];
    for (let i in x){
        if (x[i] > max){
            max = x[i];
        }
    } return max
}
console.log(maxNumber(numbersArr))
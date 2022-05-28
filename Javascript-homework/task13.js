function isPrime(n){
    for (let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
    return true;
}

function getPrimeNums(n){
    for (let i = 2; i <= n; i++){
        console.log(isPrime(i) ? `${i} is prime` : i)
    }
}
getPrimeNums(101) 
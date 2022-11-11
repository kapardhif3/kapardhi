function isItPrime(num) {
    for (let i = 2; i * i <= num; i++){
        if (num % i === 0){
            return "No"
        }
    }
    return "Yes"
}

console.log(isItPrime(5))
console.log(isItPrime(15))
console.log(isItPrime(13))
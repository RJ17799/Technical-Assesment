function isPrimeAndNextPrime(num){
    if(num===0 || num===1){
        return "Its neither a prime nor a composite";
    }
    let i = 2;
    while(i<=num){
        if(num % i === 0 && num !== i){
            // console.log('num',num ,i)
            return `${num} is not a prime number`;
        }
        i++;
    }
    return ` difference: ${nextPrime(num) - num}`
}
function nextPrime(num){
    let next = num
    while(true){
        let x = 2;
        next++;
        let flag = 0;
        while(x<=next){
            if(next % x === 0 && next !== x ){
                flag++;
                break;
            }
            x++;
        }
        if(next > num && flag === 0){
            return next;
        }
    }
}
let checkPrime = isPrimeAndNextPrime(103);
console.log(checkPrime);

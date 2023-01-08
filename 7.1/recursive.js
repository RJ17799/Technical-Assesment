function fibonacci(num){
    if(num===1){
        return 1;
    }
    if(num === 2){
        return 1;
    }
    while(num>0){
        return fibonacci(num-1) + fibonacci(num-2);
    }

}
console.log('fib',fibonacci(8));


function Counter(){
    let count = 0;
    function increment(){
        count++;
       console.log('count',count);
    }
    function decrement()
    {
        count--;
       console.log('count',count);

    }
    return{
        increment,
        decrement

    }
}
let counter1 = Counter();
counter1.decrement();
counter1.decrement();
let counter2 = Counter()
counter2.increment();
counter2.decrement();



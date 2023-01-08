let num = process.argv;
let x = 0;
while(x < process.argv.length){
    if(x===0 || x===1){
        x++;
        continue;
    }
    num = process.argv.splice(x)[0];
}
console.log('num',num);
    
for(let i=0;i<10;i++){
    if(i%2==0){
        console.log('even number');
    }else{
        console.log('odd number');
    }
}

switch(num % 2 === 0){
    case true:
        console.log('switch even number');
        break;
    case false:
        console.log('switch old number');
        break;
    default:
        console.log('while end');
}




let bonus=10;

function sum (a,b){
    let result =a+b+bonus;
    if(result>9){
        var mood="chill";
        mood="happy";
        mood="funny";
        console.log(mood);
    } 
    let day="friday";
    console.log(day);
    return result;
} 

const add=sum(29,11);
console.log(add);
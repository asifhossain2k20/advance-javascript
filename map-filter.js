const value=[10,20,30,40];
const output=[];

for(let i=0;i<value.length;i++){
    const element=value[i];
    const result=element*element;
    output.push(result);
}
console.log(output);


const result=value.map(function(element){
    return element*element;
})

console.log(result);

const result2= value.map(x=>x*x);
console.log(result2);

const result3=value.filter(x=> x>20);
console.log(result3);

const result4=value.find(x=> x>20);
console.log(result4);
const students=[
   {id:01,name:"Asif"},
   {id:02,name:"Alif"},
   {id:03,name:"hossain"}

]

for(let i=0;i<students.length;i++){
    const element=students[i];
    console.log(element);
}
const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const fill=students.filter(s=>s.id>1);
const finding=students.find(s=>s.id>1);
console.log(names);
console.log(ids);
console.log(fill);
console.log(finding);
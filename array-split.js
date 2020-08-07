const nums=[10,20,30,40,50,60,60];
const part=nums.slice(2,5);
const removed=nums.splice(2,3,33,44,55);
const together=nums.join(" ");


console.log(part);
console.log(removed);
console.log(together);
console.log(nums);
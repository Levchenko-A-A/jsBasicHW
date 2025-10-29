console.log('Задача №1');
const nums = [67, 35, 57, 234, 457, 43, 89, 234, 87, 456];
let sum = 0;
nums.forEach(function (el) {
    sum += el;
});
console.log(sum);
console.log('Задача №2');
let newNums = nums.map(function (el) {
    return el*2;
});
console.log(newNums);
console.log('Задача №3');
let minNum = nums[0];
let maxNum = nums[0];
for (let i=0; i<nums.length; i++) {
    if (minNum>nums[i]) {
        minNum = nums[i];
    }
    if (maxNum<nums[i]) {
        maxNum = nums[i];
    }
}
console.log(minNum, maxNum);
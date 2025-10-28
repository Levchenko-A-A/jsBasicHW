console.log('Задача №1');
for(let i=50; i<=100; i++)
{
    console.log(i);
}
console.log('');
console.log('Задача №2');
for(let i=1; i<=9; i++)
{
    console.log(`7 * ${i} = ${7*i}`);
}
console.log('');
console.log('Задача №3');
const number = prompt('Введите число N:');
let sum = 0;
let count = 0;
for(let i=1; i<=number; i++)
{
    if(i%2!=0){
        sum += i;
        count++;
    }
}
console.log(sum);
console.log(count);
console.log(`Среднее арифметическое всех нечетных чисел: ${(sum/count).toFixed(2)}`);
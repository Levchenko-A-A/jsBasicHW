console.log('Задача №1');
const a=17;
const b=24;
console.log(`Произведение чисел a и b = ${a*b}`);
console.log(`Сумма чисел a и b = ${a+b}`);
console.log('');
console.log('Задача №2');
const stringOne = 'worsfbgowebosinvoliwebroubgvsodincosiboi edoiveoirvbslkn erv ejrv oewr vo v';
const stringTwo = 'iubhewircgmie ei cgier gcwr fxywv fwie fxw7ie fxiwyr ficw fxw';
console.log(`Суммарное количество символов в двух строках ${+(stringOne.length+stringTwo.length)}`)
console.log('');
console.log('Задача №3');
const numberEnter = prompt('Введите трехзначное число: ');
const firstNumber = numberEnter%10;
const secondNumber = (numberEnter -firstNumber)/10%10;
const thirdNumber = (numberEnter - firstNumber - secondNumber*10)/100;
console.log(`Сумма цифр: ${firstNumber + secondNumber + thirdNumber}`);
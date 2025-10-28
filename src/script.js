console.log('Задача №1');
const numberOne = 5;
const numberTwo = 25;
if(numberOne > numberTwo)
    console.log(numberOne);
else console.log(numberTwo);
console.log('');
console.log('Задача №2');
const month = prompt('Введите номер месяца: ');
switch(+month){
    case 1:
        console.log('Январь');
        break;
    case 2:
        console.log('Февраль');
        break;
    case 3:
        console.log('Март');
        break;
    case 4:
        console.log('Апрель');
        break;
    case 5:
        console.log('Май');
        break;
    case 6:
        console.log('Июнь');
        break;
    case 7:
        console.log('Июль');
        break;
    case 8:
        console.log('Август');
        break;
    case 9:
        console.log('Сентябрь');
        break;
    case 10:
        console.log('Октябрь');
        break;
    case 11:
        console.log('Ноябрь');
        break;
    case 12:
        console.log('Декабрь');
        break;
    default:
        console.log('Неккоректный ввод номера месяца');
}
console.log('');
console.log('Задача №3');
const circle = prompt('Введите площадь круга: ');
const square = prompt('Введите площадь квадрата: ');
const circleDiam = circle*2/Math.PI.toFixed(2);
const squareSide = Math.sqrt(square).toFixed(2);
if(circleDiam == squareSide)
    console.log('Данная окружность поместиться в квадрат');
else 
    console.log('Данная окружность не поместиться в квадрат');
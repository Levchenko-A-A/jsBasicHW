console.log('Задача №1')
let user = {
    name: 'John'
}
let number = +prompt('Введите число: ');
user.age = number;
console.log(user);

console.log('Задача №2');
let admin = Object.assign(user, {role: 'admin'});
console.log(user);

console.log('Задача №3');
let {name, age, role} = admin;
console.log(name, age, role);
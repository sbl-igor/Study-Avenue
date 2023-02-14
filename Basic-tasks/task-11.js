// Решите задачу через switch-case.
// Переменная num может принимать 4 значения: 
// 1, 2, 3 или 4. Если она имеет значение '1', 
// то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.

let num = +prompt('Введите целое число от 1 до 4 включительно');
let result;
switch(num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        alert('Ошибка');
}
// Задание 
// Спросите у пользователя как его зовут,
// если это не Евгений, то выведите "не пущу

let inputName = prompt('Введите имя');

if (inputName.toLowerCase() != 'евгений') {
    alert('Не пущу!');
} else {
    alert('Welcome!');   
}
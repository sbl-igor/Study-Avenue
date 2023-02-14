// Задание #4
// Спросите у пользователя 2 числа и выведите ему наибольшее
// Если были переданы не числа, то сообщите ему об этом

let firstNum = +prompt('Первое число');
let secondNum = +prompt('Второе число');

if (firstNum > secondNum) {
    alert('Первое число больше второго');
} else if (firstNum < secondNum) {
    alert('Второе число больше первого');
} else if (firstNum === secondNum) {
    alert('Числа равны');
} else {
    alert('Вы ввели не числа');
}


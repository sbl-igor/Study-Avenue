// Спросите у пользователя 2 числа, и выведите подряд все числа
// начиная с первого по второе. Если первое число больше
// второго — выводить ошибку

let minNum = +prompt('Первое число');
let maxNum = +prompt('Второе число');

if (minNum > maxNum) {
    alert('Ошибка!');
} else {
    for (minNum; minNum <= maxNum; minNum++) {
        console.log(minNum);
    }
}
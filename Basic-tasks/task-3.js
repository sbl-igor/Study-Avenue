// Игра угадай число, укажите в переменную число от 1 до 20
// Спросите у пользователя какое число вы загадали.
// Если он угадал, то поздравьте его с победой, если нет,
// то скажите больше или меньше ваше число.
// Спросите пользователя еще 3 раза, если он не ответит правильно,
// то скажите что он проиграл

const referenceVal = Math.floor(Math.random() * 21); // рандомайзер. Постоянно новое число от 0 до 20;
console.log(referenceVal);

for (let i = 1; i <= 4; i++) {
    if (i == 4) {
        alert('Вы проиграли :(');
    }
    let clientVal = +prompt('Загадайте число от 1 до 20');
    if (clientVal === referenceVal) {
        alert('Поздравляем! Вы угадали');
        break;
    } else if (clientVal > referenceVal) {
        alert(`Ваше число больше, это ваша ${i}/3 попыток`);
    } else if (clientVal < referenceVal) {
        alert(`Ваше число меньше, это ваша ${i}/3 попыток`);
    }
}
// Если переменная a больше 2-х и меньше 11-ти, 
// или переменная b больше или равна 6-ти и меньше 14-ти, 
// то выведите 'Верно', в противном случае выведите 'Неверно'.

let a = 5;
let b = 7;

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    alert('Верно');
} else {
    alert('Неверно');
}
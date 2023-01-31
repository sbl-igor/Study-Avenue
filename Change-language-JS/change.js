/*
Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', 
то в переменную arr запишем массив дней недели на русском языке, 
а если имеет значение 'en' – то на английском.
*/
let arr = [];
setTimeout(() => {
    let langVal = prompt('Выберите язык, пожалуйста', '"ru" or "en"');
    // метод toLowerCase() преобразуют значение переменной в нижний регистр
    if (langVal.toLowerCase() == 'ru') {
        arr.push('Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",)
        // Выбираем "Колекцию" наших "лишек", в каждую из которых вставим элемент массива (поочередно);
        let listLi = document.querySelectorAll('li')
        for (let i in listLi) {
            listLi[i].innerHTML = arr[i];
            console.log(listLi[i])
        }
        // Меняем наше "шаблонное" изображение вопроса на флаг
        let imgFlag = document.getElementById('flag');
        imgFlag.setAttribute('src', './img/Flag_of_Russia.svg.png');
        alert(arr);
    } else if (langVal.toLowerCase() == 'en') {
        arr.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',)
        // Выбираем "Колекцию" наших "лишек", в каждую из которых вставим элемент массива (поочередно);
        let listLi = document.querySelectorAll('li')
        for (let i in listLi) {
            listLi[i].innerHTML = arr[i];
            console.log(listLi[i])
        }
        // Меняем наше "шаблонное" изображение вопроса на флаг
        let imgFlag = document.getElementById('flag');
        imgFlag.setAttribute('src', './img/Flag_of_Great_Britain_(1707–1800).svg.png');
        alert(arr);
    } else {
        alert("Выберите язык снова")
    }
}, 100)
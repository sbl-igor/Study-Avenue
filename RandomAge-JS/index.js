setTimeout(() => {
    let agePrompt = +prompt('Введите год вашего рождения', '****');
    let numPrompt = +prompt('Введите ваше предполагаемое число', '****');
    let ageDiv = document.querySelector('.age');
    let numDiv = document.querySelector('.num');
    let boolDiv = document.getElementById('bool');
    ageDiv.innerHTML = agePrompt;
    numDiv.innerHTML = numPrompt;
    if ((agePrompt - numPrompt) >= 200 || (agePrompt - numPrompt) * (-1) >= 200) {
        boolDiv.innerText = "НЕТ";
        alert("Данное число очень далеко от вашего рождения");
    } else if (((agePrompt - numPrompt) <= 50  || (agePrompt - numPrompt) * (-1) <= 50) && ((agePrompt - numPrompt) > 20  || (agePrompt - numPrompt) * (-1) > 20)) {
        boolDiv.innerText = "НЕТ";
        alert("Вы стали чуть ближе");
    } else if (((agePrompt - numPrompt) <= 20 || (agePrompt - numPrompt) * (-1) <= 20) && ((agePrompt - numPrompt) >= 1  || (agePrompt - numPrompt) * (-1) >= 1)) {
        boolDiv.innerText = "НЕТ";
        alert('Вы почти угадали!');
    } else if (agePrompt == numPrompt) {
        boolDiv.innerText = "ДА";
        alert(`Ваше предполагаемое число "${numPrompt}" равно дате вашего рождения "${agePrompt}"`);
    }
}, 500)

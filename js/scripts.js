/*Bootstrap:

- Вивести на сторінку кнопку (застосувати стилі бутстрапа) при натисканні на яку відкривається модальне вікно з деякими даними
- Повісити на цю кнопку Tooltip із довільним текстом
- Створити ще одну кнопку, при натисканні на яку показується бутстрапівський алерт. При повторному натисканні - ховається.

*/


document.addEventListener("DOMContentLoaded", function() {

    let button = document.getElementById("myButton");

    let tooltip = new bootstrap.Tooltip(button, {
        placement: "right",
        title: "Що таке модальне вікно",
        trigger: "hover",
        animation: true
    });
});


document.addEventListener("DOMContentLoaded", function() {

    let showAlertBtn = document.getElementById("liveAlertBtn");
    let myAlert = document.getElementById("liveAlertPlaceholder");


    showAlertBtn.addEventListener("click", function() {
        // Переключаем классы, чтобы показать/скрыть алерт
        myAlert.classList.toggle("d-none");
    });
});


/*- Вивести дату вашого народження в довільному форматі з використанням moment.js*/
let birthDate = '1982-04-30';
let dateObject = moment(birthDate, 'YYYY-MM-DD');
let formattedDate = dateObject.format('DD.MM.YYYY');
console.log(formattedDate);
alert(formattedDate);


/*Moment:
- Отримати від користувача дату його народження в певному форматі і через moment.js перетворити в інший формат
- реалізувати перевірку (за допомогою регулярних виразів) на коректність користувацького введення (перевірити, що формат введення відповідає очікуванням)
- якщо формат не відповідає - виводимо помилку (використовуємо bootstrap стилі)*/

function validateAndConvert() {
    const inputDate = document.getElementById('birthdateInput').value;
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(inputDate)) {
        showError("Формат дати некоректний. Введіть дату у форматі YYYY-MM-DD.");
        return;
    }

    const formattedDate = moment(inputDate, "YYYY-MM-DD").format("Do MMMM YYYY");
    showResult(`Дата народження: ${formattedDate}`);
}

function showError(message) {
    const errorDiv = document.getElementById('errorDiv');
    errorDiv.innerHTML = [
        `<div class="alert alert-danger" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
}

function showResult(message) {
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML = [
        `<div class="alert alert-success" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
}







function startDialog() {
    alert("Вітаємо вас у нашій кав'ярні!");

    let drinkChoice = prompt("Який напій ви хочете замовити? (Кава, Чай, Сік)");

    if (drinkChoice === null || drinkChoice === "") {
        alert("Ви не вибрали напій.");
    } else {
        alert("Ви вибрали: " + drinkChoice);
    }
    let confirmOrder = confirm("Бажаєте підтвердити замовлення?");

    if (confirmOrder) {
        let quantity = prompt("Скільки чашок ви хочете замовити?");

        if (quantity !== null && !isNaN(quantity) && quantity > 0) {
            alert("Ваше замовлення: " + quantity + " чашок " + drinkChoice);
        } else {
            alert("Ви не ввели правильну кількість.");
        }
        let repeat = true;
        while (repeat) {
            let addExtras = prompt("Бажаєте додати додаткові опції? (Молоко, Сироп, Без цукру)");
            if (addExtras === null || addExtras === "") {
                alert("Ви не вибрали додаткові опції.");
            } else {
                alert("Ви додали: " + addExtras);
                repeat = false;
            }
        }
    } else {
        alert("Ваше замовлення не підтверджене.");
    }
}
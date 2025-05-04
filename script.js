function greetVisitor() {
    alert("Ласкаво просимо до нашої кав'ярні!");
}

function askForFeedback() {

    const leaveMessage = confirm("Бажаєте залишити відгук про кав'ярню?");
    if (leaveMessage) {
        const userMessage = prompt("Будь ласка, напишіть ваш відгук:");
        if (!userMessage) {
            alert("Ви не залишили відгук. Дякуємо за відвідування!");
        } else {
            alert("Дякуємо за ваш відгук! Ми його обов'язково врахуємо.");
        }
    } else {
        alert("До зустрічі! Сподіваємось побачити вас знову.");
    }
}

const btn = document.getElementById("feedbackBtn");

btn.addEventListener("click", greetVisitor);
btn.addEventListener("click", askForFeedback);




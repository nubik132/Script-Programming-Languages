'use strict'

const textbox = document.getElementById("textbox")
const text = document.getElementById("text")

textbox.addEventListener('input', () => {
    try {
        text.innerText = parseInt(textbox.value)+1;
        if (isNaN(text.innerText)) {
            throw new TypeError("не число");
        }
    } catch (err) {
        text.innerText = "Что-то пошло не так ;("
    }
})



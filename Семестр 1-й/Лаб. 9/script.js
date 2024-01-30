let div_messages = document.getElementById("messages");
let send_button = document.getElementById("send_button");
const wait_time = 5000;
const messages_storage_name = "messages_storage";
let messages_storage = { storage: [] };
const leave_form = document.getElementById('leave-form');
for (const star of leave_form.children[1].children) {
    star.addEventListener('click', () => {window.close()});
}

input_message.addEventListener('change', () => pressSendButton());

window.onbeforeunload = function() {
    showLeaveFrom();
    return 'hello';
  } 

document.addEventListener('wheel', e => e.preventDefault(), { passive: false });
document.addEventListener('keydown', (e) => {
    if (e.key == "ArrowUp" || e.key == "ArrowDown") {
        e.preventDefault()
    }
}, { passive: false });

// window.onbeforeunload = leave;

function loadMessages(storage) {
    let messages = load(storage);
    if (messages) {
        messages_storage = messages;
        for (const message of messages_storage.storage) {
            createMessage(message);
        }
    }
}

function load(name) {
    let json_data = JSON.parse(localStorage.getItem(name));
    return json_data;
}

function pressSendButton() {
    let text = getInputText(input_message);
    createMessage(text);
    saveMessage(messages_storage, text);
    toggleDisabled(send_button);
    setTimeout(createAnswer, getRandomInt(wait_time));
    setInputText(input_message, "");
}

function createMessage(text) {
    let message_box = document.createElement('div');
    message_box.classList.add("message-box");

    let message = document.createElement('div');
    message.classList.add("message");
    message.innerText = text;

    message_box.appendChild(message);
    div_messages.appendChild(message_box);
}

function getInputText(input) {
    return input.value;
}

function toggleDisabled(input) {
    input.toggleAttribute("disabled");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomAnswer(answers) {
    return answers[getRandomInt(answers.length)];
}

function createAnswer() {
    let answer = getRandomAnswer(answers);
    createMessage(answer);
    unlockSendButton(send_button);
    saveMessage(messages_storage, answer);
}

function unlockSendButton(send_button) {
    toggleDisabled(send_button);
}

function setInputText(input, text) {
    input.value = text;
}

function saveMessage(storage, message) {
    storage.storage.push(message);
    save(messages_storage_name, storage);
}

function save(name, value) {
    let str_data = JSON.stringify(value)
    localStorage.setItem(name, str_data);
}

loadMessages(messages_storage_name);

function leave() {
    showLeaveFrom();
}

function showLeaveFrom() {
    leave_form.style.display = "flex";
}

function hideLeaveFrom() {
    leave_form.style.display = "none";
    window.onbeforeunload = null;
}
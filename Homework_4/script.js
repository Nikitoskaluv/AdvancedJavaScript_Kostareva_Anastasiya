//Задание 1,2
let text = document.querySelector('p');
let regexp = /\s'|\W'/g;
document.querySelector('.replace_btn').addEventListener('click', () => {
    text.textContent = text.textContent.replace(regexp, "\"");
});

//Задание 3

let nameInput = document.querySelector('#name');
phoneInput = document.querySelector('#phone');
emailInput = document.querySelector('#email');
textInput = document.querySelector('#text');

let name_msg = document.querySelector('#name_msg');
phone_msg = document.querySelector('#phone_msg');
email_msg = document.querySelector('#email_msg');
text_msg = document.querySelector('#text_msg');

let regexpName = /^[a-zа-яё\s]+$/;
regexpPhone = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
regexpEmail = /^[\w.-]+@[a-z]+\.[a-z]{2,6}$/i;
regexpTextInput = /.{1,}/;

function validate(reg, inp) {
    return reg.test(inp);
}
function notValid(inp, el) {
    inp.classList.remove('trueInput')
    inp.classList.add('falseInput');
    el.classList.remove('invisible');
}
function valid(inp, el) {
    inp.classList.remove('falseInput');
    inp.classList.add('trueInput');
    el.classList.add('invisible');
}

nameInput.addEventListener('input', (e) => {
    if (!validate(regexpName, nameInput.value)) {
        notValid(nameInput, name_msg);
    } else {
        valid(nameInput, name_msg);
    }
});

phoneInput.addEventListener('input', (e) => {
    if (!validate(regexpPhone, phoneInput.value)) {
        notValid(phoneInput, phone_msg);
    } else {
        valid(phoneInput, phone_msg);
    }
});
emailInput.addEventListener('input', (e) => {
    if (!validate(regexpEmail, emailInput.value)) {
        notValid(emailInput, email_msg);
    } else {
        valid(emailInput, email_msg);
    }
});
textInput.addEventListener('input', (e) => {
    if (!validate(regexpTextInput, textInput.value)) {
        notValid(textInput, text_msg);
    } else {
        valid(textInput, text_msg);
    }
});
document.querySelector('#submit_btn').addEventListener('click', (e) => {
    if (!validate(regexpName, nameInput.value) || !validate(regexpPhone, phoneInput.value) || !validate(regexpEmail, emailInput.value) || !validate(regexpTextInput, textInput.value)) {
        e.preventDefault();
        document.querySelector('.err').classList.remove('err');

    } else {
        document.querySelector('#form').submit();
        document.querySelector('.err').classList.add('err');
    }
}
);

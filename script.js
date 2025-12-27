const a = document.querySelector('#number1');
const b = document.querySelector('#number2');

const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');

const result = document.querySelector('#result');

function sum() {
    const add = parseInt(a.value) + parseInt(b.value);
    result.innerHTML = `Result: ${add}`;
}

function subtract() {
    const sub = parseInt(a.value) - parseInt(b.value);
    result.innerHTML = `Result: ${sub}`;
}

function multiply() {
    const mul = parseInt(a.value) * parseInt(b.value);
    result.innerHTML = `Result: ${mul}`;
}

function divide() {
    const div = parseInt(a.value) / parseInt(b.value);
    result.innerHTML = `Result: ${div}`;
}
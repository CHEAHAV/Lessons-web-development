function add() {
    let value1 = document.querySelector('#value1');
    let value2 = document.querySelector('#value2');
    let result = document.querySelector('#result');
    result.value = parseFloat(value1.value) + parseFloat(value2.value);
}
function subtract() {
    let value1 = document.querySelector('#value1');
    let value2 = document.querySelector('#value2');
    let result = document.querySelector('#result');
    result.value = parseFloat(value1.value) - parseFloat(value2.value);
}
function multiply() {
    let value1 = document.querySelector('#value1');
    let value2 = document.querySelector('#value2');
    let result = document.querySelector('#result');
    result.value = parseFloat(value1.value) * parseFloat(value2.value);
}
function divide() {
    let value1 = document.querySelector('#value1');
    let value2 = document.querySelector('#value2');
    let result = document.querySelector('#result');
    result.value = parseFloat(value1.value) / parseFloat(value2.value);
}
function clearFields() {
    let value1 = document.querySelector('#value1');
    let value2 = document.querySelector('#value2');
    let result = document.querySelector('#result');
    value1.value = "";
    value2.value = "";
    result.value = "";
}

let input_length = document.getElementById('input_length');
let length_text = document.getElementById('length-text');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let symbols = document.getElementById('symbols');
let numbers = document.getElementById('numbers');
let btns = document.querySelector('.btns');
let display = document.getElementById('displays');

function change() {
    length_text.innerText = input_length.value;
}


btns.addEventListener('click', () => {
    let length = +input_length.value;
    let hasLower = lowercase.checked;
    let hasUpper = uppercase.checked;
    let hasNumbers = numbers.checked;
    let hasSymbols = symbols.checked;
    generationsPfASSWOR(hasLower, hasUpper, hasNumbers, hasSymbols, length);
});

function getRandomLOWERCASE() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUPPERCASE() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNUMBER() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSYMBOL() {
    let symbols = '!@#$%^&*()_+<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
}


function generationsPfASSWOR(lower, upper, num, syb, lengths) {

    let ARR = [];
    
    for (let i = 0; i < lengths; i++) {
        if (upper) {
            ARR.push(getRandomUPPERCASE())
        }
        if (lower) {
            ARR.push(getRandomLOWERCASE())
        }
        if (num) {
            ARR.push(getRandomNUMBER())
        }
        if (syb) {
            ARR.push(getRandomSYMBOL())
        }
    }

    let pasword = ARR.sort(() => Math.floor(Math.random() - 0.5)).join('');
    let finalPassword = pasword.slice(0, lengths);
    display.innerText = finalPassword;
}
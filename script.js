const numbers = document.querySelector('.numbers');
const letters = document.querySelector('.letters');
const space = document.querySelector('.space');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');


    function displayNumbers () {
        for (let i = 48; i < 58; i++) {
            numbers.innerHTML += `<div class='btn number' data-num='${String.fromCharCode([i])}'>${String.fromCharCode([i])}</div>`;
        }
    }

    function displayLetters () {
        for (let i = 65; i < 91; i++) {
            letters.innerHTML += `<div class='btn letter' data-num='${String.fromCharCode([i])}'>${String.fromCharCode([i])}</div>`;
        }
    }

displayNumbers();
displayLetters();

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen1');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let keyValue = btns[i].getAttribute('data-num');
        if (screen.innerHTML.length < 10) {
        screen.innerHTML += keyValue;
        }
    })
}

space.addEventListener('click', () => {
    let spaceSign = String.fromCharCode(20);
    if (screen.innerHTML.length < 10) {
    screen.innerHTML += spaceSign;
    } 
})

clear.addEventListener('click', () => {
    screen.innerHTML = '';
})

backspace.addEventListener('click', () => {
    let text = screen.innerHTML;
    let textUpd;
    textUpd = text.slice(0, -1);
    screen.innerHTML = textUpd;
    }
)
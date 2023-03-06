//se debe generar un nuevo consejo cuando se oprime el botón
const adviceApi = 'https://api.adviceslip.com/advice';
const generateAdvice = document.querySelector('.icon-dice');
let randomId = 0;
const adviceId = document.querySelector('.advice-nro');
const adviceText = document.querySelector('.advice');

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function insertAdvice(id, adv) {
    adviceId.innerText = 'Advice #' + id;
    adviceText.innerText = adv
}




window.addEventListener('load', () => {
    randomId = randomIntFromInterval(1, 220);

    fetch(adviceApi + '/' + randomId)
        .then((response) => response.json())
        .then((advice) => {
            insertAdvice(advice.slip.id, advice.slip.advice);
        })

});

generateAdvice.addEventListener('click', () => {
    randomId = randomIntFromInterval(1, 220);

    fetch(adviceApi + '/' + randomId)
        .then((response) => response.json())
        .then((advice) => {
            insertAdvice(advice.slip.id, advice.slip.advice);
        })

});
